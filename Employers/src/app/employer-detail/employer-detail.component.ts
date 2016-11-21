import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Employer } from '.././employer';
import { EmployerService } from '.././employer.service';

@Component({
    selector: 'app-employer-detail',
    templateUrl: './employer-detail.component.html',
    styleUrls: ['./employer-detail.component.css']
})
export class EmployerDetailComponent implements OnInit {
    employer:Employer;

    constructor(
        private employerService:EmployerService,
                private route:ActivatedRoute,
                private location:Location
    ) {
    }

    ngOnInit():void {
        this.route.params.forEach((params:Params) => {
            let id = +params['id'];
            this.employerService.getCurrentEmployer(id)
                .then(employer => this.employer = employer);
        });
    }

    goBack():void {
        this.location.back();
    }
}

