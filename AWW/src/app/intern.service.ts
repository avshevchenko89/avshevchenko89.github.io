import {Injectable}    from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Intern}        from './intern';
import {Marker}        from './marker';

@Injectable()
export class InternService {
    private internsUrl = 'api/interns';
    private locationUrl = 'http://maps.googleapis.com/maps/api/geocode/json?address=Kiev';

    constructor(private http: Http) {
    }

    getInterns(): Promise<Intern[]> {
        return this.http.get(this.internsUrl)
            .toPromise()
            .then(response => response.json().data as Intern[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
