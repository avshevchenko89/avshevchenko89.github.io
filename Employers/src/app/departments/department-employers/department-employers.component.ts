import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location}               from '@angular/common';

import {Employer} from '../.././employer';

import {EmployerService} from '../.././employer.service';

@Component({
  selector: 'app-department-employers',
  templateUrl: './department-employers.component.html',
  styleUrls: ['./department-employers.component.css']
})
export class DepartmentEmployersComponent implements OnInit {
  employers: Employer[];

  constructor(
              private employerService: EmployerService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.employerService.getAllEmployers()
        .then(employers => {
          this.employers = employers.filter(employer => employer.departmentId === id);
        })
    });
  }

  goBack(): void {
    this.location.back();
  }
}
