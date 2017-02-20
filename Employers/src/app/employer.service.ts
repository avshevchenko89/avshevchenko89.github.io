import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Employer } from './employer'
import { Department } from './department';

@Injectable()
export class EmployerService {

    private headers = new Headers({'Content-Type': 'application/json'});

    private employersUrl = 'http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/employees';

    constructor(private http:Http) {
    }

    getAllEmployers():Promise<Employer[]> {
        return this.http.get(this.employersUrl)
            .toPromise()
            .then(response => response.json() as Employer[])
            .catch(this.handleError);
    }

    getCurrentEmployer(id:number):Promise<Employer> {
        return this.getAllEmployers()
            .then(employers =>
                employers.find(employer => employer.id === id))
    }

    createEmpl(firstName:string, lastName:string, phone:string, salary:number, departmentId:number):Promise<Employer> {
        return this.http
            .post(this.employersUrl, JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                salary: salary,
                departmentId: departmentId,

            }), {
                headers: this.headers
            })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    deleteEmpl(id:number):Promise<void> {
        let url = `${this.employersUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error:any):Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
