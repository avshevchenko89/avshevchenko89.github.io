import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Employer } from './employer'
import { Department } from './department';

@Injectable()
export class DepartmentService {
    private headers = new Headers({'Content-Type': 'application/json'});

    private departmentUrl = 'http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments';

    constructor(private http:Http) {
    }

    getDepartments():Promise<Department[]> {
        return this.http.get(this.departmentUrl)
            .toPromise()
            .then(response => response.json() as Department[])
            .catch(this.handleError);
    }

    getCurrentDepartment(id:number):Promise<Department> {
        return this.getDepartments()
            .then(departments =>
                departments.find(department => department.id === id))
    }

    createDep(name:string, description:string):Promise<Department> {
        return this.http
            .post(this.departmentUrl, JSON.stringify({
                name: name,
                description: description
            }), {
                headers: this.headers
            })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    deleteDep(id:number):Promise<void> {
        let url = `${this.departmentUrl}/${id}`;
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
