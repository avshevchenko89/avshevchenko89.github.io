import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainComponent}        from './main/main.component';
import {ForCompaniesComponent}     from './for-companies/for-companies.component';
import {InternDetailComponent}      from './for-companies/intern-detail/intern-detail.component';
import {ForInternsComponent}        from './for-interns/for-interns.component';
import {JobDetailComponent}         from './for-interns/job-detail/job-detail.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: MainComponent
    },{
        path: 'for-interns',
        component: ForInternsComponent
    }, {
        path: 'job/:id',
        component: JobDetailComponent
    }, {
        path: 'for-companies',
        component: ForCompaniesComponent
    }, {
        path: 'intern/:id',
        component: InternDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
