import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ContactsComponent} from './contacts/contacts.component';
import {GroupsComponent} from './groups/groups.component';
import {ClockComponent} from './clock/clock.component';

const routes: Routes = [
    { path: '', redirectTo: '/contacts', pathMatch: 'full' },
    { path: 'contacts',  component: ContactsComponent },
    { path: 'groups', component: GroupsComponent },
    { path: 'clock',     component: ClockComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

