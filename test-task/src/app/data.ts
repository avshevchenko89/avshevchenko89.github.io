import {InMemoryDbService} from 'angular-in-memory-web-api';

export class DataService implements InMemoryDbService {
  createDb() {

    let users = [
      {id: 1, name: 'Ivan', surname: 'Pupkin', age: 47, group: 'user', description: 'Like coffee', note: ''},
      {id: 2, name: 'Vasyl', surname: 'Pupkin', age: 42, group: 'admin', description: 'Like coffee', note: ''},
      {id: 3, name: 'Bill', surname: 'Gates', age: 57, group: 'user', description: 'Like coffee', note: ''},
      {id: 4, name: 'Ivan', surname: 'Ivanov', age: 21, group: 'user', description: 'Like coffee', note: ''}
    ];

    let groups = [
      {
        id: 1,
        name: 'user',
        members: [{
          id: 1,
          name: 'Ivan',
          surname: 'Pupkin',
          age: 47,
          group: 'user',
          description: 'Like coffee',
          note: ''
        }, {
          id: 3,
          name: 'Bill',
          surname: 'Gates',
          age: 57,
          group: 'user',
          description: 'Like coffee',
          note: ''
        }, {
          id: 4,
          name: 'Ivan',
          surname: 'Ivanov',
          age: 21,
          group: 'user',
          description: 'Like coffee',
          note: ''
        }]
      },
      {
        id: 2,
        name: 'admin',
        members: [{
          id: 2,
          name: 'Vasyl',
          surname: 'Pupkin',
          age: 42,
          group: 'admin',
          description: 'Like coffee',
          note: ''
        }]
      }
    ];

    return {users, groups};
  }
}

