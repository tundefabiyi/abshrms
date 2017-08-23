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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var AppraisalPeriodService = (function () {
    function AppraisalPeriodService(http) {
        this.http = http;
        this.Url = 'api/appraisalperiods';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    AppraisalPeriodService.prototype.getAppraisalPeriods = function () {
        return this.http.get(this.Url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    AppraisalPeriodService.prototype.getAppraisalPeriod = function (id) {
        var url = this.Url + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    AppraisalPeriodService.prototype.update = function (appraisalPeriod) {
        var url = this.Url + "/" + appraisalPeriod.id;
        return this.http
            .put(url, JSON.stringify(appraisalPeriod), { headers: this.headers })
            .toPromise()
            .then(function () { return appraisalPeriod; })
            .catch(this.handleError);
    };
    AppraisalPeriodService.prototype.create = function (appraisalPeriod) {
        return this.http
            .post(this.Url, JSON.stringify(appraisalPeriod), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    AppraisalPeriodService.prototype.delete = function (id) {
        var url = this.Url + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    AppraisalPeriodService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    AppraisalPeriodService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AppraisalPeriodService);
    return AppraisalPeriodService;
}());
exports.AppraisalPeriodService = AppraisalPeriodService;
//# sourceMappingURL=appraisalperiod.service.js.map