import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';

import {Job} from '../job';
import {JobService} from '../job.service';

@Component({
  selector: 'app-job-detail',
  outputs: ['deleteSelected'],
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  job: Job;

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.jobService.getJob(id)
        .then(job => this.job = job)
    })
  }

  save(): void {
    this.jobService.update(this.job)
      .then(() => this.router.navigate(['']));
  }

  delete(): void {
    this.jobService
      .delete(this.job.id)
      .then(() => this.router.navigate(['']));
  }
}
