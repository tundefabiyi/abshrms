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
var pmsparameters_service_1 = require("../pmsparameters.service");
var index_1 = require("../../services/index");
var CompetencyItemSetupComponent = (function () {
    function CompetencyItemSetupComponent(pMSParametersService, alertService) {
        this.pMSParametersService = pMSParametersService;
        this.alertService = alertService;
        this.competencytypelist = [];
        this.isinSelectionMode = false;
        this.loading = false;
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortBy = "description";
        this.sortOrder = "asc";
    }
    CompetencyItemSetupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pMSParametersService.fetchCompetencyTypeList()
            .subscribe(function (data) {
            _this.loading = false;
            _this.competencytypelist = data.itemlist;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    CompetencyItemSetupComponent.prototype.onCompetencytypeSelected = function (selecteditem) {
        var _this = this;
        //  $event.preventDefault();
        this.loading = true;
        this.selectedCompetencytype = selecteditem;
        console.log('selected: ' + selecteditem.code + ' ' + selecteditem.description);
        this.pMSParametersService.fetchCompetencyItemList(selecteditem.code)
            .subscribe(function (data) {
            // setTimeout(() => { this.loading = false }, 4000)
            _this.loading = false;
            _this.data = data.itemlist;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    CompetencyItemSetupComponent.prototype.save = function () {
        var _this = this;
        this.loading = true;
        if (this.isinSelectionMode == false) {
            this.pMSParametersService.createCompetencyItem(this.selectedCompetencytype.code, this.code, this.description, this.percentage)
                .subscribe(function (data) {
                _this.loading = false;
                _this.data = data.itemlist;
                _this.code = "";
                _this.description = "";
                _this.percentage = "";
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
        }
        else {
            this.pMSParametersService.updateCompetecyitem(this.selectedcompetencyitem.id, this.description, this.percentage)
                .subscribe(function (data) {
                _this.loading = false;
                _this.data = data.itemlist;
                _this.selectedcompetencyitem = {};
                _this.isinSelectionMode = false;
                _this.code = "";
                _this.description = "";
                _this.percentage = "";
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
        }
    };
    CompetencyItemSetupComponent.prototype.oncompetencyitemselected = function (selectedcompetencyitem) {
        this.selectedcompetencyitem = selectedcompetencyitem;
        this.code = selectedcompetencyitem.code;
        this.description = selectedcompetencyitem.description;
        this.percentage = selectedcompetencyitem.percentage;
        this.isinSelectionMode = true;
    };
    CompetencyItemSetupComponent = __decorate([
        core_1.Component({
            moduleId: module.id.toString(),
            templateUrl: 'competencyitemsetup.component.html'
        }),
        __metadata("design:paramtypes", [pmsparameters_service_1.PMSParametersService,
            index_1.AlertService])
    ], CompetencyItemSetupComponent);
    return CompetencyItemSetupComponent;
}());
exports.CompetencyItemSetupComponent = CompetencyItemSetupComponent;
//# sourceMappingURL=competencyitemsetup.component.js.map