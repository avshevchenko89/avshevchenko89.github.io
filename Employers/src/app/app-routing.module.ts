import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from './main/main.component';

import {EmployersComponent} from './employers/employers.component';
import {EmployerDetailComponent} from './employer-detail/employer-detail.component';

import {DepartmentsComponent} from './departments/departments.component';
import {DepartmentEmployersComponent} from './departments/department-employers/department-employers.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'departments',
    component: DepartmentsComponent
  },
  {
    path: 'employers',
    component: EmployersComponent
  },
  {
    path: 'detail/:id',
    component: EmployerDetailComponent
  },
  {
    path: 'department/:id',
    component: DepartmentEmployersComponent
  }];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
