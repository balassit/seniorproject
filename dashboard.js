/*global angular*/
var baseUrl = 'http://127.0.0.1:8000/dashboard/api/'

var securityDashboard = angular.module('securityDashboard', ['ui.bootstrap']).config(function ($httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        $httpProvider.defaults.headers.patch = {'Content-Type': 'application/json;charset=utf-8'}
    });

securityDashboard.controller('SecurityDashboardController', ['$scope', '$http', function ($scope, $http) {
    'use strict';

    /*jslint browser: true*/
    /*global $location*/

    $scope.btnDisable = false;
    $scope.btnBack = true;
    $scope.numShow = 3;
    $scope.currentPage = 1;
    $scope.whatToShow = [];
    $scope.viewHome = true;
    $scope.viewNotice = false;
    $scope.viewMod = false;
    $scope.viewList = true;
    $scope.viewReport = false;
    $scope.tabName = 'home';
    $scope.sortType     = 'severity'; // set the default sort type
    $scope.sortReverse  = true;  // set the default sort order
    $scope.searchModule = '';     // set the default search/filter term
    $scope.comments = '';
    $scope.myValue = '';
    $scope.statuses = [
        {status: "Unseen"},
        {status: "Viewed"},
        {status: "Fixed"}
    ];

    $scope.orderBool = false;
    $scope.columnName = 'module';

    $scope.toggleSort = function(fieldName){
        $scope.orderBool = !$scope.orderBool;
        $scope.columnName = fieldName;
    };

    $scope.showing = function (data) {
        var start = (($scope.currentPage - 1) * $scope.numShow);
        var stop = start + $scope.numShow;
        $scope.whatToShow = data.slice(start,stop);
    };

    $scope.validURL = function(value){
        var pattern = new RegExp('^(https?:\/\/)?'+ // protocol
            '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ // domain name
            '((\d{1,3}\.){3}\d{1,3}))'+ // OR ip (v4) address
            '(\:\d+)?(\/[-a-z\d%_.~+]*)*'+ // port and path
            '(\?[;&a-z\d%_.~+=-]*)?'+ // query string
            '(\#[-a-z\d_]*)?$','i'); // fragment locater
        if(!pattern.test(str)) {
            return false;
        } else {
            return true;
        }
    };

    $scope.go = function (link) {
        $location.path(link);
    };

    $scope.getMod = function (title) {
          $http.get(baseUrl + 'reports/?module=' + title).success(function (modData) {
            $scope.pageData = modData;
            $scope.viewListData = modData.results;
            $scope.myTitle = title;
            $scope.getSize = modData.length;
        });
    };

    $scope.getHome = function () {
        $http.get(baseUrl + 'reports/').success(function (modData) {
            $scope.pageData = modData;
            $scope.viewListData = modData.results;
            $scope.myTitle = 'Home';
            $scope.getSize = modData.length;
        });
    };

    $scope.getNotice = function () {
        $http.get(baseUrl + 'reports/?severity=1').success(function (modData) {
            $scope.pageData = modData;
            $scope.viewListData = modData.results;
            $scope.myTitle = 'Notice';
            $scope.getSize = modData.length;
        });
    };

    $scope.getReport = function (id) {
        $http.get(baseUrl + 'reports/' + id + '/').success(function (modData) {
            $scope.viewReportData = modData;
            $scope.myTitle = modData.title;
        });
    };

    $scope.getNextPage = function () {
        $http.get($scope.pageData.next).success(function (modData) {
            $scope.pageData = modData;
            $scope.viewListData = modData.results;
        });
    };

    $scope.getPrevPage = function () {
        $http.get($scope.pageData.previous).success(function (modData) {
            $scope.pageData = modData;
            $scope.viewListData = modData.results;
        });
    };

    $scope.updateReportStatus = function (newStatus) {
        var data = {status: newStatus.charAt(0)};
        $http.patch(baseUrl + 'reports/' + $scope.viewReportData.id + '/', data);
        $scope.viewReportData.status = newStatus.charAt(0);
    }

    $scope.updateReportNotes = function () {
        var newNotes = $("#Notes").val();
        var data = {comment: newNotes};
        $http.patch(baseUrl + 'reports/' + $scope.viewReportData.id + '/', data);
    }

    $http.get(baseUrl + 'modules/').success(function (data) {
        $scope.modList = data;
    });

    $http.get(baseUrl + 'reports/').success(function (data) {
        $scope.homeMod = data.results;
    });

    $scope.showHome = function () {
        $scope.viewHome = true;
        $scope.viewNotice = false;
        $scope.viewMod = false;
        $scope.viewReport = false;
        $scope.viewList = true;
    };

    $scope.showNotice = function () {
        $scope.viewHome = false;
        $scope.viewNotice = true;
        $scope.viewMod = false;
        $scope.viewReport = false;
        $scope.viewList = true;
    };

    $scope.showMod = function () {
        $scope.viewHome = false;
        $scope.viewNotice = false;
        $scope.viewMod = true;
        $scope.viewReport = false;
        $scope.viewList = true;
    };

    $scope.showReport = function () {
        $scope.viewHome = false;
        $scope.viewNotice = false;
        $scope.viewMod = false;
        $scope.viewReport = true;
        $scope.viewList = false;
    };


    $scope.beforeRender = function ($view, $dates, $leftDate, $upDate, $rightDate) {
    var index = Math.floor(Math.random() * $dates.length);
    $dates[index].selectable = false;
        $scope.viewList = false;
    }
}]);
