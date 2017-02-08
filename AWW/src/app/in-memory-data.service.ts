import {InMemoryDbService} from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let interns = [
      {
        id: 1,
        firstName: 'Tatyana',
        lastName: 'Ivanova',
        city: 'Kiev',
        country: 'Ukraine',
        availableHours: 24,
        hourlyRate: 3,
        english: true,
        skills: ['HTML', 'CSS', 'JavaScript'],
        gender: 'female',
        socialLink: 'https://linkedin.com'
      }, {
        id: 2,
        firstName: 'John',
        lastName: 'Smith',
        city: 'New Your',
        country: 'USA',
        availableHours: 16,
        hourlyRate: 4,
        english: false,
        skills: ['Karma', 'Jasmin', 'JavaScript'],
        gender: 'male',
        socialLink: 'https://linkedin.com'
      }, {
        id: 3,
        firstName: 'Jane',
        lastName: 'Dou',
        city: 'Paris',
        country: 'France',
        availableHours: 16,
        hourlyRate: 5,
        english: false,
        skills: ['NodeJS', 'MySQL'],
        gender: 'female',
        socialLink: 'https://linkedin.com'
      }];

    let jobs = [{
      id: 1,
      title: 'Angular 2 Developer',
      description: '',
      location: 'Flexible',
      locationBookmark: '* you must attend standing team meetings daily between 9 and 11 in the morning US EST',
      type: 'Contract Full Time',
      requiredSkills: ['HTML', 'CSS', 'JavaScript', 'Angular 2']
    }, {
      id: 2,
      title: 'Senior Enterprise Architect',
      description: '',
      location: 'Flexible',
      locationBookmark: '* you must attend standing team meetings daily between 9 and 11 in the morning US EST',
      type: 'Contract Full Time',
      requiredSkills: ['HTML', 'CSS', 'JavaScript', 'AJAX', 'NodeJS']
    },
    ];
    return {
      interns, jobs
    };
  }
}
