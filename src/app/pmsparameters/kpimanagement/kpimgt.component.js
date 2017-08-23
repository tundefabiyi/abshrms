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
var KPIMgtComponent = (function () {
    function KPIMgtComponent(pMSParametersService, alertService) {
        this.pMSParametersService = pMSParametersService;
        this.alertService = alertService;
        this.selectedkpi = {};
        this.isinSelectionMode = false;
        this.loading = false;
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortBy = "description";
        this.sortOrder = "asc";
    }
    KPIMgtComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pMSParametersService.getkpilist()
            .subscribe(function (data) {
            _this.loading = false;
            _this.data = data.dto_KPIItemList;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    KPIMgtComponent.prototype.savekpi = function () {
        var _this = this;
        this.loading = true;
        if (this.isinSelectionMode == false) {
            this.pMSParametersService.createkpi({ id: "", description: this.kpidescriprion, computationbasics: this.computationbasics })
                .subscribe(function (data) {
                _this.loading = false;
                _this.data = data.dto_KPIItemList;
                _this.computationbasics = "";
                _this.kpidescriprion = "";
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
        }
        else {
            this.pMSParametersService.updatekpi({ id: this.selectedkpi.id, description: this.kpidescriprion, computationbasics: this.computationbasics })
                .subscribe(function (data) {
                _this.loading = false;
                _this.data = data.dto_KPIItemList;
                _this.selectedkpi = {};
                _this.isinSelectionMode = false;
                _this.computationbasics = "";
                _this.kpidescriprion = "";
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
                _this.selectedkpi = {};
                _this.isinSelectionMode = false;
            });
        }
    };
    KPIMgtComponent.prototype.selectkpi = function (selectedkpi) {
        this.selectedkpi = selectedkpi;
        this.kpidescriprion = selectedkpi.description;
        this.computationbasics = selectedkpi.computationbasics;
        this.isinSelectionMode = true;
    };
    KPIMgtComponent = __decorate([
        core_1.Component({
            moduleId: module.id.toString(),
            templateUrl: 'kpimgt.component.html'
        }),
        __metadata("design:paramtypes", [pmsparameters_service_1.PMSParametersService,
            index_1.AlertService])
    ], KPIMgtComponent);
    return KPIMgtComponent;
}());
exports.KPIMgtComponent = KPIMgtComponent;
//# sourceMappingURL=kpimgt.component.js.map