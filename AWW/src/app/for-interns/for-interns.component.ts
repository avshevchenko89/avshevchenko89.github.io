import {Component, OnInit} from '@angular/core';

import {Job}               from '../job';
import {JobService}        from '../job.service';

@Component({
    selector: 'app-jobs',
    templateUrl: 'for-interns.component.html',
    styleUrls: ['for-interns.component.css']
})
export class ForInternsComponent implements OnInit {
    title = 'The best companies are waiting for you!';

    jobs: Job[];

    constructor(
        private jobService: JobService
    ) { }

    ngOnInit() {
        this.getJobs();
    }

    getJobs():void {
        this.jobService
            .getJobs()
            .then(jobs => this.jobs = jobs)
    }
}
