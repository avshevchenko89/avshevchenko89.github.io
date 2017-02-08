import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let jobs = [{
      id: 1,
      title: 'Angular 2 Developer',
      description: '',
      location: 'Flexible',
      locationBookmark: '* you must attend standing team meetings daily between 9 and 11 in the morning US EST',
      type: 'Contract Full Time',
      requiredSkills: []
    }, {
      id: 2,
      title: 'Senior Enterprise Architect',
      description: '',
      location: 'Flexible',
      locationBookmark: '* you must attend standing team meetings daily between 9 and 11 in the morning US EST',
      type: 'Contract Full Time',
      requiredSkills: []
    }, {
      id: 3,
      title: 'Java Engineer',
      description: '',
      location: 'Flexible',
      locationBookmark: '',
      type: 'Contract Full Time',
      requiredSkills: []
    }, {
      id: 4,
      title: 'Quality Assurance Engineer',
      description: '',
      location: 'Philippines',
      locationBookmark: '* you must attend standing team meetings regularly either in the morning or mid evening US time',
      type: 'Contract Full Time',
      requiredSkills: []
    }, {
      id: 5,
      title: 'Cloud Engineer',
      description: '',
      location: 'Flexible',
      locationBookmark: '',
      type: 'Contract Full Time',
      requiredSkills: []
    }];
    return {jobs};
  }
}
