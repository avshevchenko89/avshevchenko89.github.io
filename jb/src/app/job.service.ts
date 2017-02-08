import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Job} from './job';

@Injectable()
export class JobService {
  private headers = new Headers({'Content-Type': 'application/json'});

  private jobsUrl = 'api/jobs';

  constructor(private http: Http) {
  }

  getJobs(): Promise<Job[]> {
    return this.http.get(this.jobsUrl)
      .toPromise()
      .then(response => response.json().data as Job[])
      .catch(this.handleError);
  }

  getJob(id: number): Promise<Job> {
    const url = `${this.jobsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Job)
      .catch(this.handleError);
  }

  create(title: string, description: string, location: string, locationBookmark: string, type: string, requiredSkills: string[]): Promise<Job> {
    return this.http
      .post(this.jobsUrl, JSON.stringify({
        title: title,
        description: description,
        location: location,
        locationBookmark: locationBookmark,
        type: type,
        requiredSkills: requiredSkills
      }), {
        headers: this.headers
      })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    let url = `${this.jobsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  update(job: Job): Promise<Job> {
    const url = `${this.jobsUrl}/${job.id}`;
    return this.http
      .put(url, JSON.stringify(job), {headers: this.headers})
      .toPromise()
      .then(() => job)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
