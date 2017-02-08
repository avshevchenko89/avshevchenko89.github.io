import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';

import {Job}               from '../../job';
import {JobService}        from '../../job.service';

@Component({
    selector: 'app-job',
    inputs: ['job'],
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.css']
})

export class JobComponent implements OnInit {
    job: Job;

    constructor(
        private jobService: JobService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    goToDetail(job: Job) {
        this.router.navigate(['/job', job.id]);
    }
}
