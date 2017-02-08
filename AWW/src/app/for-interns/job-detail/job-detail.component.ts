import {Component, OnInit}        from '@angular/core';
import {ActivatedRoute, Params}   from '@angular/router';

import {Job}                      from '../../job';
import {JobService}               from '../../job.service';

@Component({
    selector: 'app-job-detail',
    templateUrl: './job-detail.component.html',
    styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
    job: Job;

    constructor(
        private jobService: JobService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.jobService.getJob(id)
                .then(job => this.job = job)
        })
    }
}
