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
var app_model_1 = require("../app.model");
var PMSParametersService = (function () {
    function PMSParametersService(http) {
        this.http = http;
    }
    PMSParametersService.prototype.getkpilist = function () {
        var url = app_model_1.webapibaseurl + "pmsparameters/getkpilist?searchtext=";
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    PMSParametersService.prototype.getById = function (id) {
        return this.http.get('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    PMSParametersService.prototype.createkpi = function (kpi) {
        var url = app_model_1.webapibaseurl + "pmsparameters/createkpi";
        return this.http.post(url, kpi).map(function (response) { return response.json(); });
    };
    PMSParametersService.prototype.updatekpi = function (kpi) {
        var url = app_model_1.webapibaseurl + "pmsparameters/updatekpi";
        return this.http.post(url, kpi).map(function (response) { return response.json(); });
    };
    PMSParametersService.prototype.fetchCompetencyTypeList = function () {
        var url = app_model_1.webapibaseurl + "pmsparameters/fetchCompetencyTypeList";
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    PMSParametersService.prototype.fetchCompetencyItemList = function (competencytypeid) {
        var url = app_model_1.webapibaseurl + "pmsparameters/fetchCompetencyItemList?competencytypeid=" + competencytypeid;
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    PMSParametersService.prototype.createCompetencyItem = function (competencytypeId, code, description, percentage) {
        var url = app_model_1.webapibaseurl + "pmsparameters/createCompetencyItem";
        var body = { competencytypeId: competencytypeId, code: code, description: description, percentage: percentage };
        return this.http.post(url, body).map(function (response) { return response.json(); });
    };
    PMSParametersService.prototype.updateCompetecyitem = function (id, description, percentage) {
        var url = app_model_1.webapibaseurl + "pmsparameters/updateCompetecyitem";
        var body = { id: id, description: description, percentage: percentage };
        return this.http.post(url, body).map(function (response) { return response.json(); });
    };
    PMSParametersService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    PMSParametersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], PMSParametersService);
    return PMSParametersService;
}());
exports.PMSParametersService = PMSParametersService;
//# sourceMappingURL=pmsparameters.service.js.map