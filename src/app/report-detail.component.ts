import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ReportService } from './report.service';
import { Report } from './report';

@Component({
    selector: 'my-report-detail',
    templateUrl: './report-detail.component.html',
    styleUrls: ['./report-detail.component.css']
})
export class ReportDetailComponent implements OnInit {
    @Input() report: Report;

    constructor(
        private reportService: ReportService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.reportService.getReport(+params['id']))
            .subscribe(report => this.report = report);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.reportService.update(this.report)
            .then(() => this.goBack());
    }


}
