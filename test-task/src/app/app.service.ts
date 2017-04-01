import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {User} from './user';
import {Group} from './group';

@Injectable()
export class AppService {

  private headers = new Headers({'Content-Type': 'application/json'});

  private usersUrl = 'api/users';
  private groupsUrl = 'api/groups';

  constructor(private http:Http) {
  }

  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(this.handleError);
  }

  getGroups(): Promise<Group[]> {
    return this.http.get(this.groupsUrl)
      .toPromise()
      .then(response => response.json().data as Group[])
      .catch(this.handleError);
  }

  createUser(name: string, surname: string, age: number, group: string, description: string, note: string): Promise<User> {
    return this.http
      .post(this.usersUrl, JSON.stringify({
        name: name,
        surname: surname,
        age: age,
        group: group,
        description: description,
        note: note
      }), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as User)
      .catch(this.handleError);
  }

  updateUser(user: User): Promise<User> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

  deleteUser(id: number): Promise<void>  {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  createGroup(name: string, members: User[]): Promise<Group> {
    return this.http
      .post(this.groupsUrl, JSON.stringify({
        name: name,
        members: []
      }), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Group)
      .catch(this.handleError);
  }

  updateGroup(group: Group): Promise<Group> {
    const url = `${this.groupsUrl}/${group.id}`;
    return this.http
      .put(url, JSON.stringify(group), {headers: this.headers})
      .toPromise()
      .then(() => group)
      .catch(this.handleError);
  }

  deleteGroup(id: number): Promise<void>  {
    const url = `${this.groupsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
