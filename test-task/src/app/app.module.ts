import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ContactsComponent} from './contacts/contacts.component';
import {GroupsComponent} from './groups/groups.component';
import {ClockComponent} from './clock/clock.component';

import {AppRoutingModule} from './app-routing.module';

import {AppService} from './app.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data';

@NgModule({
    declarations: [
        AppComponent,
        ContactsComponent,
        GroupsComponent,
        ClockComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        InMemoryWebApiModule.forRoot(DataService),
    ],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
