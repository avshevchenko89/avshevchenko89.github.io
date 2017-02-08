import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

//Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { JobService } from './job.service';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobListComponent } from './job-list/job-list.component';

import './rxjs-extensions';

@NgModule({
  declarations: [
    AppComponent,
    JobDetailComponent,
    JobListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {
        path: '',
        component: JobListComponent
      }, {
        path: 'detail/:id',
        component: JobDetailComponent
      }
    ])
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
