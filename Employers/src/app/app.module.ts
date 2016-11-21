import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { routing } from './app-routing.module';

import { MainComponent } from './main/main.component';
import { EmployersComponent } from './employers/employers.component';
import { EmployerDetailComponent } from './employer-detail/employer-detail.component';

import { DepartmentService } from './department.service';
import { EmployerService } from './employer.service';
import { DepartmentPipe } from './department.pipe';

import { DepartmentsModule } from './departments/departments.module';


@NgModule({
    declarations: [
        AppComponent,
        EmployersComponent,
        MainComponent,
        EmployerDetailComponent,
        DepartmentPipe
    ],
    imports: [
        MaterialModule.forRoot(),
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        DepartmentsModule
    ],
    providers: [
        DepartmentService,
        EmployerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
