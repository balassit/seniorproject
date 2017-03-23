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
var report_service_1 = require('./report.service');
var ReportsComponent = (function () {
    function ReportsComponent(router, reportService) {
        this.router = router;
        this.reportService = reportService;
    }
    ReportsComponent.prototype.ngOnInit = function () {
        this.getReports();
    };
    ReportsComponent.prototype.getReports = function () {
        var _this = this;
        this.reportService.getReports().then(function (reports) { return _this.reports = reports; });
    };
    ReportsComponent.prototype.onSelect = function (report) {
        this.selectedReport = report;
        this.router.navigate(['/detail', this.selectedReport.id]);
    };
    ReportsComponent.prototype.add = function (name, title, comment, module, severity, status, id, date) {
        var _this = this;
        name = name;
        title = title;
        comment = comment;
        module = module;
        severity = severity;
        status = status;
        id = id;
        date = date;
        if (!(name | title | module | severity | status | id)) {
            return;
        }
        this.reportService.create(id, name, status, severity, module, comment, title, date)
            .then(function (report) {
            _this.reports.push(report);
            _this.selectedReport = null;
        });
    };
    ReportsComponent.prototype.delete = function (report) {
        var _this = this;
        this.reportService
            .delete(report.id)
            .then(function () {
            _this.reports = _this.reports.filter(function (h) { return h !== report; });
            _this.selectedReport = null;
        });
        this.goBack();
    };
    ReportsComponent = __decorate([
        core_1.Component({
            selector: 'my-reports',
            templateUrl: './reports.component.html',
            styleUrls: ['./reports.component.css'],
            providers: [report_service_1.ReportService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, report_service_1.ReportService])
    ], ReportsComponent);
    return ReportsComponent;
}());
exports.ReportsComponent = ReportsComponent;
//# sourceMappingURL=reports.component.js.map