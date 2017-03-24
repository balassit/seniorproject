webpackJsonp([1,4],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportService = (function () {
    function ReportService(http) {
        this.http = http;
        this.reportsUrl = 'api/reports'; // URL to web api
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ReportService.prototype.getReports = function () {
        return this.http.get(this.reportsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ReportService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ReportService.prototype.getReport = function (id) {
        var url = this.reportsUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ReportService.prototype.update = function (report) {
        var url = this.reportsUrl + "/" + report.id;
        return this.http
            .put(url, JSON.stringify(report), { headers: this.headers })
            .toPromise()
            .then(function () { return report; })
            .catch(this.handleError);
    };
    ReportService.prototype.create = function (id, status, severity, module, comment, title, date) {
        return this.http
            .post(this.reportsUrl, JSON.stringify({ title: title, comment: comment, module: module, severity: severity, status: status, id: id, date: date }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ReportService.prototype.delete = function (id) {
        var url = this.reportsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ReportService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ReportService);
    return ReportService;
    var _a;
}());
//# sourceMappingURL=report.service.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_service__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(reportService) {
        this.reportService = reportService;
        this.reports = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reportService.getReports()
            .then(function (reports) { return _this.reports = reports; });
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Component */])({
            selector: 'my-dashboard',
            template: __webpack_require__(520),
            styles: [__webpack_require__(516)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__report_service__["a" /* ReportService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__report_service__["a" /* ReportService */]) === 'function' && _a) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__report__ = __webpack_require__(459);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__report__["a" /* Report */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__report__["a" /* Report */]) === 'function' && _a) || Object)
    ], ReportDetailComponent.prototype, "report", void 0);
    ReportDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Component */])({
            selector: 'my-report-detail',
            template: __webpack_require__(521),
            styles: [__webpack_require__(517)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__report_service__["a" /* ReportService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__report_service__["a" /* ReportService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* Location */]) === 'function' && _d) || Object])
    ], ReportDetailComponent);
    return ReportDetailComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=report-detail.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_service__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportsComponent = (function () {
    function ReportsComponent(router, reportService, location) {
        this.router = router;
        this.reportService = reportService;
        this.location = location;
    }
    ReportsComponent.prototype.ngOnInit = function () {
        this.getReports();
    };
    ReportsComponent.prototype.goBack = function () {
        this.location.back();
    };
    ReportsComponent.prototype.getReports = function () {
        var _this = this;
        this.reportService.getReports().then(function (reports) { return _this.reports = reports; });
    };
    ReportsComponent.prototype.onSelect = function (report) {
        this.selectedReport = report;
        this.router.navigate(['/detail', this.selectedReport.id]);
    };
    ReportsComponent.prototype.add = function (title, comment, module, severity, status, id, date) {
        var _this = this;
        title = title;
        comment = comment;
        module = module;
        severity = severity;
        status = status;
        id = id;
        date = date;
        //if (!(title | module | severity | status | id)) { return; }
        this.reportService.create(id, status, severity, module, comment, title, date)
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Component */])({
            selector: 'my-reports',
            template: __webpack_require__(522),
            styles: [__webpack_require__(518)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__report_service__["a" /* ReportService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__report_service__["a" /* ReportService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__report_service__["a" /* ReportService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* Location */]) === 'function' && _c) || Object])
    ], ReportsComponent);
    return ReportsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 338;


/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(457);


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_detail_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reports_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_component__ = __webpack_require__(305);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* DashboardComponent */] },
    { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_3__reports_component__["a" /* ReportsComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_2__report_detail_component__["a" /* ReportDetailComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Contextual Security Dashboard';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Component */])({
            selector: 'my-app',
            styles: [__webpack_require__(515)],
            template: "\n    <h1>{{title}}</h1>\n    <nav>\n      <a routerLink=\"/dashboard\">Dashboard</a>\n      <a routerLink=\"/reports\">Reports</a>\n    </nav>\n    <router-outlet></router-outlet>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__report_detail_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reports_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__report_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_in_memory_web_api__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__in_memory_data_service__ = __webpack_require__(458);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__in_memory_data_service__["a" /* InMemoryDataService */]),
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__reports_component__["a" /* ReportsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__report_detail_component__["a" /* ReportDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dashboard_component__["a" /* DashboardComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__report_service__["a" /* ReportService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var reports = [
            {
                id: 1,
                status: 1,
                severity: 1,
                module: 'AWS',
                comment: 'comment',
                title: 'AWS Report 3/17',
                date: 7,
            },
            {
                id: 2,
                status: 2,
                severity: 2,
                module: 'Security',
                comment: 'more comments',
                title: 'AWS Report 3/17',
                date: 7,
            },
            {
                id: 3,
                status: 2,
                severity: 2,
                module: ' Security',
                comment: 'more comments',
                title: 'Security Report 3/18',
                date: 7,
            }
        ];
        return { reports: reports };
    };
    return InMemoryDataService;
}());
//# sourceMappingURL=in-memory-data.service.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Report; });
var Report = (function () {
    function Report() {
    }
    return Report;
}());
//# sourceMappingURL=report.js.map

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(62)();
// imports


// module
exports.push([module.i, "h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(62)();
// imports


// module
exports.push([module.i, "[class*='col-'] {\n  margin-top: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\n.code {\n  font:500 90%/1 Roboto Mono,monospace;\n  word-break: break-word;\n}\na{\n  text-decoration: none;\n}\n\n/* unvisited link */\na:link {\n  color: #3c8aaf;\n}\n\n/* unvisited and visited link */\na:visited {\n  color: #607D8B;\n}\n\n/* mouse over and selected link */\na:active, a:hover {\n    color: #3c8aaf;\n}\n\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  text-align: center;\n  color: #eee;\n  max-height: 20px;\n  min-width: 120px;\n  border-radius: 2px;\n}\n.module:hover {\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 5px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(62)();
// imports


// module
exports.push([module.i, "label {\n  display: inline-block;\n  width: 3em;\n  margin: .5em 1.2em;\n  color: #067D8B;\n  font-weight: bold;\n}\n\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: 0.5em;\n}\n\nbutton {\n  margin-left: 1.2em;\n  margin-top: 20px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer; cursor: hand;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(62)();
// imports


// module
exports.push([module.i, ".selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.addReport {\n\n}\n\n.reportTable {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.reportTable li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.reportTable tr.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.reportTable tr:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.reports .text {\n  position: relative;\n  top: -3px;\n}\n.reports .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\n.reportTable {\n    margin-top: 20px;\n}\n\ntable.reportTable {\n    width:100%;\n    text-align: center;\n    border-collapse: collapse;\n    margin-bottom:10px;\n}\n\n.reportTable th, td {\n    padding: 10px;\n}\n\n.reportTable th {\n    font-weight: bold;\n    font-size: 120%;\n    background-color: dodgerblue;\n    -webkit-text-fill-color: white;\n    text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

module.exports = "<h3>Modules</h3>\n<div class=\"grid grid-pad\">\n  <div class=\"module report\">\n      <a *ngFor= \"let report of reports\" [routerLink]=\"['/detail', report.id]\" class=\"col-1-4\">\n        <code>\n          <h4>{{report.id}} | {{report.module}} | {{report.title}}</h4>\n        </code>\n      </a>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"report\">\n    <h2>{{report.title}}</h2>\n    <div><label>id: </label>{{report.id}}</div>\n    <div><label>title: </label>{{report.title}}</div>\n    <div>\n        <label>status: </label>\n        <input [(ngModel)]=\"report.status\" placeholder=\"status\" />\n    </div>\n    <div><label>severity: </label>{{report.severity}}</div>\n    <div><label>module: </label>{{report.module}}</div>\n    <div><label>date: </label>{{report.date}}</div>\n    <div>\n        <label>comment: </label>\n        <input [(ngModel)]=\"report.comment\" placeholder=\"comment\" />\n    </div>\n    <button (click)=\"goBack()\">Back</button>\n    <button (click)=\"save()\">Save</button>\n    <button class=\"delete\"\n     (click)=\"delete(report); $event.stopPropagation()\">Delete</button>\n</div>\n"

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

module.exports = "<h2>My Reports</h2>\n\n<table class=\"reportTable table-bordered table-striped\">\n        <tr>\n                <th>ID</th>\n                <th>Module</th>\n                <th>Title</th>\n                <th>Status</th>\n                <th>Severity</th>\n        </tr>\n        <tr *ngFor=\"let report of reports\"\n          [class.selected]=\"report === selectedReport\"\n          (click)=\"onSelect(report)\">\n\n            <td>{{report.id}}</td>\n            <td>{{report.module}}</td>\n            <td>{{report.title}}</td>\n            <td>{{report.status}}</td>\n            <td>{{report.severity}}</td>\n        </tr>\n </table>\n\n <div>\n     <h4>Add a New Report</h4>\n     <label>Module:</label> <input #module />\n     <label>ID</label> <input #reportId />\n     <label>Report Status:</label> <input #reportStatus />\n     <label>Report Severity:</label> <input #reportSeverity />\n     <label>Report Title:</label> <input #reportTitle />\n     <label>Report Comment:</label> <input #reportComment />\n     <label>Report Date:</label> <input #reportDate />\n\n     <button (click)=\"add(reportTitle.value, reportComment.value, module.value, reportSeverity.value, reportStatus.value,\n     reportId.value, reportDate.value); reportTitle.value = ''; reportComment.value = ''; module.value = ''; reportSeverity.value = ''; reportStatus.value = ''; reportId.value = ''; reportDate.value = '';\">\n Add\n</button>\n </div>\n"

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(340);


/***/ })

},[549]);
//# sourceMappingURL=main.bundle.js.map