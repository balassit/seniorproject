import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Report } from './report';
import { ReportService } from './report.service';

import { Location } from '@angular/common';

@Component({
    selector: 'my-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.css'],
    providers: [ReportService]
})

export class ReportsComponent implements OnInit {
    reports: Report[];
    selectedReport: Report;

    constructor(
        private router: Router,
        private location: Location,
        private reportService: ReportService) { }

    ngOnInit(): void {
        this.getReports();
    }

    getReports(): void {
        this.reportService.getReports().then(reports => this.reports = reports);
    }
    onSelect(report: Report): void {
        this.selectedReport = report;
        this.router.navigate(['/detail', this.selectedReport.id]);
    }

add(name: string, title: string, comment: string, module: string, severity: number, status: number, id: number, date: number): void {
        name= name;
        title = title;
        comment = comment;
        module = module;
        severity = severity;
        status = status;
        id = id;
        date = date;
        if (!(name || title || module || severity || status || id)) { return; }
        this.reportService.create(id, name, status, severity, module, comment, title, date)
            .then(report => {
                this.reports.push(report);
                this.selectedReport = null;
            });
    }

    delete(report: Report): void {
        this.reportService
            .delete(report.id)
            .then(() => {
                this.reports = this.reports.filter(h => h !== report);
                this.selectedReport = null;
            });
        this.location.back();
    }
}
