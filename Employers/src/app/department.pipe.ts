import { Pipe, PipeTransform } from '@angular/core';

import { Employer } from './employer';

@Pipe({
  name: 'department',
})

export class DepartmentPipe implements PipeTransform {

  transform(value:Employer[], departmentId:number):Employer[] {
    let currentEmployers = [];
    if (!departmentId) {
      return value;
    } else {
      for (let employer of value) {
        if (employer.departmentId == departmentId) {
          currentEmployers.push(employer)
        }
      }
      return currentEmployers;
    }
  }
}
