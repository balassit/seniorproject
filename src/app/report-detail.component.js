"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
var report_service_1 = require('./report.service');
var report_1 = require('./report');
var ReportDetailComponent = (function () {
    function ReportDetailComponent(reportService, route, location) {
        this.reportService = reportService;
        this.route = route;
        this.location = location;
    }
    ReportDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.reportService.getReport(+params['id']); })
            .subscribe(function (report) { return _this.report = report; });
    };
    ReportDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ReportDetailComponent.prototype.save = function () {
        var _this = this;
        this.reportService.update(this.report)
            .then(function () { return _this.goBack(); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', report_1.Report)
    ], ReportDetailComponent.prototype, "report", void 0);
    ReportDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-report-detail',
            templateUrl: './report-detail.component.html',
            styleUrls: ['./report-detail.component.css']
        }), 
        __metadata('design:paramtypes', [report_service_1.ReportService, router_1.ActivatedRoute, common_1.Location])
    ], ReportDetailComponent);
    return ReportDetailComponent;
}());
exports.ReportDetailComponent = ReportDetailComponent;
//# sourceMappingURL=report-detail.component.js.map