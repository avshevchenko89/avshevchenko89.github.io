import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Employer } from '.././employer'
import { Department } from '.././department';
import { EmployerService } from '.././employer.service';
import { DepartmentService } from '.././department.service';

@Component({
    selector: 'app-employers',
    templateUrl: './employers.component.html',
    styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {
    title = 'Company employers list:';

    employers:Employer[];
    departments:Department[];
    addClicked:boolean = false;
    departmentId: number;

    model:Employer;

    constructor(
        private employerService:EmployerService,
        private departmentService: DepartmentService,
        private router:Router,
        private location:Location
    ) { }

    getEmployers():void {
        this.employerService
            .getAllEmployers()
            .then(employers => this.employers = employers)
    }

    getDepartments():void {
        this.departmentService
            .getDepartments()
            .then(departments => this.departments = departments)
    }

    ngOnInit():void {
        this.getEmployers();
        this.getDepartments();
        this.model = new Employer();
    }

    addEmpl() {
        this.addClicked = true;
    }

    close() {
        this.addClicked = false;
        this.model = new Employer();
    }

    add(firstName:string, lastName:string, phone:string, salary:number, departmentId:number):void {
        firstName = firstName.trim();
        lastName = lastName.trim();

        if (!phone || !salary) {
            phone = '';
            salary = 0;
        }

        phone = phone.trim();

        this.employerService.createEmpl(firstName, lastName, phone, salary, departmentId)
            .then(employer => this.employers.push(employer));
    }

    onSubmit() {
        console.log(this.model);
        this.add(this.model.firstName, this.model.lastName, this.model.phone, this.model.salary, this.model.departmentId);
        this.addClicked = false;
        this.model = new Employer();
    }

    delete(employer:Employer):void {
        this.employerService
            .deleteEmpl(employer.id)
            .then(() => {
                this.employers = this.employers.filter(d => d !== employer);
            });
    }

    gotoDetail(employer:Employer):void {
        this.router.navigate(['/detail', employer.id]);
    }

    onChange(departmentId) {
        this.departmentId = departmentId
    }

    goBack():void {
        this.location.back();
    }
}
