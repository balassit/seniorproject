import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { ReportDetailComponent } from './report-detail.component';
import { ReportsComponent }  from './reports.component';
import { ReportService }  from './report.service';
import { DashboardComponent }  from './dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ReportsComponent,
        ReportDetailComponent,
        DashboardComponent
    ],
    providers: [ ReportService ],
    bootstrap: [AppComponent]
})
export class AppModule { }
