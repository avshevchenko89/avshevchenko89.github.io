import { Component, OnInit } from '@angular/core';

import { Intern }            from '../intern';
import { InternService}      from '../intern.service';

@Component({
  selector: 'app-interns',
  templateUrl: 'for-companies.component.html',
  styleUrls: ['for-companies.component.css']
})
export class ForCompaniesComponent implements OnInit {
  title = 'List of available employers';

  interns: Intern[];

  constructor(
    private internService: InternService
  ) { }

  ngOnInit() {
    this.getInterns();
  }

  getInterns(): void {
    this.internService
      .getInterns()
      .then(interns => this.interns = interns);
  }
}
