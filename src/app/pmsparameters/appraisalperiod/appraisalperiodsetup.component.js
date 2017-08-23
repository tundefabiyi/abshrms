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
var index_1 = require("../../services/index");
var appraisalperiod_service_1 = require("./appraisalperiod.service");
var AppraisalPeriodSetupComponent = (function () {
    function AppraisalPeriodSetupComponent(appraisalPeriodService, alertService) {
        this.appraisalPeriodService = appraisalPeriodService;
        this.alertService = alertService;
        this.selectedperiod = {};
        this.isinSelectionMode = false;
        this.loading = false;
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortBy = "description";
        this.sortOrder = "asc";
    }
    AppraisalPeriodSetupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appraisalPeriodService.getAppraisalPeriods()
            .then(function (data) {
            _this.loading = false;
            _this.data = data;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    AppraisalPeriodSetupComponent = __decorate([
        core_1.Component({
            moduleId: module.id.toString(),
            templateUrl: 'appraisalperiodsetup.component.html',
            providers: [appraisalperiod_service_1.AppraisalPeriodService]
        }),
        __metadata("design:paramtypes", [appraisalperiod_service_1.AppraisalPeriodService,
            index_1.AlertService])
    ], AppraisalPeriodSetupComponent);
    return AppraisalPeriodSetupComponent;
}());
exports.AppraisalPeriodSetupComponent = AppraisalPeriodSetupComponent;
//# sourceMappingURL=appraisalperiodsetup.component.js.map