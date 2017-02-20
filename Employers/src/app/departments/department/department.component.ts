import {Component, OnInit, EventEmitter} from '@angular/core';

import {Router} from '@angular/router';

import {Department} from '../.././department';
import {EmployerService} from '../.././employer.service';
import {DepartmentService} from '../.././department.service';

@Component({
  selector: 'app-department',
  inputs: ['department'],
  outputs: ['deleteSelected'],
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  department: Department;
  departments: Department[];
  empty: boolean;
  deleteSelected: EventEmitter<Department>;

  constructor(private employerService: EmployerService,
              private departmentService: DepartmentService,
              private router: Router) {
    this.deleteSelected = new EventEmitter();
  }

  ngOnInit() {
    this.getDepartments();
    this.emptyCheck(this.department);
  }

  getDepartments(): void {
    this.departmentService
      .getDepartments()
      .then(departments => this.departments = departments)
  }

  emptyCheck(department: Department) {
    this.employerService
      .getAllEmployers()
      .then(employers => {
        if (employers.find(employer =>
            employer.departmentId === department.id
          )) {
          this.empty = false;
        } else {
          this.empty = true;
        }
      })
  }

  delete(department: Department): any {
    this.deleteSelected.emit(department);
  }

  showEmpoyers(department: Department): void {
    this.router.navigate(['/department', department.id]);
  }
}
