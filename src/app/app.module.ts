import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { ReportDetailComponent } from './report-detail.component';
import { ReportsComponent }  from './reports.component';
import { ReportService }  from './report.service';
import { DashboardComponent }  from './dashboard.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
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
