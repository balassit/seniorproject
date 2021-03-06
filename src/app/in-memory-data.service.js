"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var reports = [
            {
                id: 1,
                name: 'AWS Report 3/17',
                status: 1,
                severity: 1,
                module: 'AWS',
                comment: 'comment',
                title: 'AWS Report 3/17',
                date: 7,
            },
            {
                id: 2,
                name: 'Security Report 3/17',
                status: 2,
                severity: 2,
                module: 'Security',
                comment: 'more comments',
                title: 'AWS Report 3/17',
                date: 7,
            },
            {
                id: 3,
                name: 'Security Report 3/18',
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
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map