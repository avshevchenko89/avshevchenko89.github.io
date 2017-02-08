import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ForInternsComponent} from './for-interns.component';
import {JobComponent} from './job/job.component';
import {JobDetailComponent } from './job-detail/job-detail.component';

import {JobService} from '../job.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ForInternsComponent,
        JobComponent,
        JobDetailComponent
    ],
    providers: [
        JobService
    ]
})
export class JobsModule {
}
