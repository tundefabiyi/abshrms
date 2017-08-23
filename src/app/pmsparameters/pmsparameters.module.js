"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var pmsparameters_service_1 = require("./pmsparameters.service");
var pmsparametersroot_component_1 = require("./pmsparametersroot.component");
var auth_guard_1 = require("../services/auth.guard");
var pmsparametershome_component_1 = require("./pmsparametershome.component");
;
var pmsparameters_route_1 = require("./pmsparameters.route");
var navigation_module_1 = require("../navigation/navigation.module");
var appdirectives_module_1 = require("../directives/appdirectives.module");
var index_1 = require("../services/index");
var kpimgt_component_1 = require("../pmsparameters/kpimanagement/kpimgt.component");
var angular2_datatable_1 = require("angular2-datatable");
var kpilist_filter_pipe_1 = require("../pmsparameters/kpimanagement/kpilist-filter.pipe");
var competencyitemsetup_component_1 = require("../pmsparameters/competencymanagement/competencyitemsetup.component");
var appraisalperiodsetup_component_1 = require("../pmsparameters/appraisalperiod/appraisalperiodsetup.component");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var pmsparametersmockwebapi_service_1 = require("./pmsparametersmockwebapi.service");
var PMSParametersModule = (function () {
    function PMSParametersModule() {
    }
    PMSParametersModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule, pmsparameters_route_1.pmsparametersrouting, navigation_module_1.NavigationModule, appdirectives_module_1.AppDirectivesModule, angular2_datatable_1.DataTableModule, angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(pmsparametersmockwebapi_service_1.PMSParametersMockWebApiervice)],
            declarations: [pmsparametersroot_component_1.PMSParametersRootComponent, pmsparametershome_component_1.PMSParametersHomeComponent,
                kpimgt_component_1.KPIMgtComponent, kpilist_filter_pipe_1.KPIListFilterPipe, competencyitemsetup_component_1.CompetencyItemSetupComponent, appraisalperiodsetup_component_1.AppraisalPeriodSetupComponent],
            providers: [
                auth_guard_1.AuthGuard,
                index_1.AlertService,
                index_1.AuthenticationService,
                pmsparameters_service_1.PMSParametersService
            ],
            exports: [kpimgt_component_1.KPIMgtComponent]
        })
    ], PMSParametersModule);
    return PMSParametersModule;
}());
exports.PMSParametersModule = PMSParametersModule;
//# sourceMappingURL=pmsparameters.module.js.map