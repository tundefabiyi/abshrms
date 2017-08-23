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
var index_1 = require("../services/index");
var selfserviceroot_componet_1 = require("../selfservice/selfserviceroot.componet");
var auth_guard_1 = require("../services/auth.guard");
var selfservicehome_component_1 = require("../selfservice/selfservicehome.component");
;
var selfservice_route_1 = require("./selfservice.route");
var navigation_module_1 = require("../navigation/navigation.module");
var appdirectives_module_1 = require("../directives/appdirectives.module");
var angular2_datatable_1 = require("angular2-datatable");
var SelfServiceModule = (function () {
    function SelfServiceModule() {
    }
    SelfServiceModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule, selfservice_route_1.selfservicerouting, navigation_module_1.NavigationModule, appdirectives_module_1.AppDirectivesModule, angular2_datatable_1.DataTableModule],
            declarations: [selfserviceroot_componet_1.SelfServiceRootComponent, selfservicehome_component_1.SelfServiceHomeComponent],
            providers: [
                auth_guard_1.AuthGuard,
                index_1.AlertService,
                index_1.AuthenticationService
            ]
        })
    ], SelfServiceModule);
    return SelfServiceModule;
}());
exports.SelfServiceModule = SelfServiceModule;
//# sourceMappingURL=selfservice.module.js.map