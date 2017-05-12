import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Report } from './report';
import { ReportService } from './report.service';

@Component({
    selector: 'my-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.css'],
    providers: [ReportService]
})

export class ReportsComponent implements OnInit {
    errorMessage: string;
    reports: Report[];
    mode = 'Observable';
    selectedReport: Report;

    constructor(
        private router: Router,
        private reportService: ReportService) { }

    ngOnInit(): void {
        this.getReports();
    }

    getReports(): void {
        this.reportService.getReports()
        .subscribe(
        reports => this.reports = reports,
        error =>  this.errorMessage = <any>error);
    }

    onSelect(report: Report): void {
        this.selectedReport = report;
        this.router.navigate(['/detail', this.selectedReport.id]);
    }

    add(title: string, module: string, severity: number): void {
        title = title;
        module = module;
        severity = severity;
        if (!(title || module || severity)) { return; }
        this.reportService.create(title, module, severity)
            .subscribe(
              report => this.reports.push(report),
              error =>  this.errorMessage = <any>error);
        this.selectedReport = null;
    }

    delete(report: Report): void {
        this.reportService.delete(report.id)
            .subscribe(
                result => console.log(result),
                error =>  this.errorMessage = <any>error);
                this.selectedReport = null;
    }
}
