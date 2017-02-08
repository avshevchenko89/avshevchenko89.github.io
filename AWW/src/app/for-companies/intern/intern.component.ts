import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Intern} from '../../intern';
import {InternService} from '../../intern.service';

@Component({
  selector: 'app-intern',
  inputs: ['intern', 'num'],
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.css']
})

export class InternComponent implements OnInit {
  intern: Intern;
  num: number;
  spoken: string;

  constructor(
    private internService: InternService,
    private router: Router
  ) { }

  ngOnInit() {
    this.intern.english ? this.spoken='Yes' : this.spoken = 'No';
  }
}
