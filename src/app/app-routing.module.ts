import { NgModule }      from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ReportDetailComponent } from './report-detail.component';
import { ReportsComponent }  from './reports.component';
import { DashboardComponent }  from './dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'detail/:id', component: ReportDetailComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})

export class AppRoutingModule{}
