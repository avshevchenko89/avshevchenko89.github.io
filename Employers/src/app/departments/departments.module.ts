import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { DepartmentsComponent } from './departments.component';
import { DepartmentComponent } from './department/department.component';

import { DepartmentService } from '.././department.service';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule.forRoot(),
        FormsModule
    ],
    declarations: [
        DepartmentsComponent,
        DepartmentComponent
    ],
    providers: [
        DepartmentService
    ]
})
export class DepartmentsModule {
}
