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
    reports: Report[];
    selectedReport: Report;

    constructor(

        private router: Router,
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

    add(title: string, module: string, severity: number): void {
        title = title;
        module = module;
        severity = severity;
        if (!(title || module || severity)) { return; }
        this.reportService.create(title, module, severity)
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
    }
}
