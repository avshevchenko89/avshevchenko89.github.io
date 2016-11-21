import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Department } from '.././department';
import { DepartmentService } from '.././department.service';

@Component({
    selector: 'app-departments',
    inputs: ['deleteSelected'],
    templateUrl: './departments.component.html',
    styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
    title = 'Departments list';

    departments:Department[];
    model:Department;

    constructor(private departmentService:DepartmentService,
                private location:Location) {
    }

    getDepartments():void {
        this.departmentService
            .getDepartments()
            .then(departments => this.departments = departments)
    }

    ngOnInit():void {
        this.getDepartments();
        this.model = new Department();
    }

    add(name:string, description:string):void {
        name = name.trim();

        if (!description) {
            description = '';
        }

        description = description.trim();

        if (!name) {
            return;
        }

        this.departmentService.createDep(name, description)
            .then(department => {
                this.departments.push(department);
            })
    }

    onSubmit() {
        console.log(this.model.name, this.model.description);
        this.add(this.model.name, this.model.description);
        this.model = new Department;
    }

    goBack():void {
        this.location.back();
    }

    delete(department:Department):void {
        this.departmentService
            .deleteDep(department.id)
            .then(() => {
                this.departments = this.departments.filter(d => d !== department);
            });
    }
}
