import {NgModule}              from '@angular/core';
import {CommonModule}          from '@angular/common';

import {AgmCoreModule}         from 'angular2-google-maps/core';

import {ForCompaniesComponent} from './for-companies.component';
import {InternComponent}       from './intern/intern.component';
import {InternDetailComponent} from './intern-detail/intern-detail.component';
import {MapComponent}          from './map/map.component';

import {InternService}         from '../intern.service';
import {MapService}            from '../map.service';

@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDmmK9YyXppa4v6X0549rRqkzSO820r9Ww'
        })
    ],
    declarations: [
        ForCompaniesComponent,
        InternComponent,
        InternDetailComponent,
        MapComponent,
        MapComponent
    ],
    providers: [
        InternService,
        MapService
    ]
})
export class InternsModule {
}
