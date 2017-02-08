import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Job} from '../job';
import {JobService} from "../job.service";

@Component({
  selector: 'app-job-list',
  inputs: ['deleteSelected'],
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  title = 'JOBS';
  jobs: Job[];

  addForm: boolean = false;
  nextSelected: boolean = false;

  model: Job;
  requiredSkill: string;

  constructor(private router: Router,
              private jobService: JobService) {}

  ngOnInit() {
    this.getJobs();
  }

  getJobs(): void {
    this.jobService
      .getJobs()
      .then(jobs => this.jobs = jobs);
  }

  add(): void {
    this.addForm = true;
    this.model = new Job();
  }

  close(): void {
    this.addForm = false;
  }

  next() {
    this.nextSelected = true;
    this.requiredSkill = '';
  }

  addReq() {
    this.model.requiredSkills = [...this.model.requiredSkills, this.requiredSkill];
    this.requiredSkill = '';
  }

  onSubmit(): void {
    console.log(this.model);
    this.addForm = false;
    this.nextSelected = false;
    this.create(this.model.title, this.model.description, this.model.location, this.model.locationBookmark, this.model.type, this.model.requiredSkills);
  }

  create(title: string, description: string, location: string, locationBookmark: string, type: string, requiredSkills: string[]): void {
    title = title.trim();
    description = description.trim();
    location = location.trim();
    locationBookmark = locationBookmark.trim();
    type = type.trim();

    this.jobService.create(title, description, location, locationBookmark, type, requiredSkills)
      .then(job => this.jobs.push(job));
  }

  delete(job: Job): void {
    this.jobService
      .delete(job.id)
      .then(() => {
        this.jobs = this.jobs.filter(d => d !== job);
      });
  }

  gotoDetail(job: Job) {
    this.router.navigate(['/detail', job.id]);
  }
}
