import { Component, OnInit } from '@angular/core';

import { Report } from './report';
import { ReportService } from './report.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  reports: Report[] = [];

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.reportService.getReports()
      .then(reports => this.reports = reports);
  }
}
