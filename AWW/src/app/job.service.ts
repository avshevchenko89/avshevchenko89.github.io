import {Injectable}    from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Job}           from './job';

@Injectable()
export class JobService {
    private headers = new Headers({'Content-Type': 'application/json'});

    private jobsUrl = 'api/jobs';

    constructor(
        private http: Http
    ) { }

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

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
