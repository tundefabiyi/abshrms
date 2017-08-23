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
var app_component_1 = require("./app.component");
var index_1 = require("./services/index");
var index_2 = require("./directives/index");
var login_component_1 = require("./login/login.component");
var app_route_1 = require("./app.route");
var index_3 = require("./services/index");
var selfservice_module_1 = require("./selfservice/selfservice.module");
var navigation_module_1 = require("./navigation/navigation.module");
var pmsparameters_module_1 = require("./pmsparameters/pmsparameters.module");
var angular2_datatable_1 = require("angular2-datatable");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var pmsparametersmockwebapi_service_1 = require("./pmsparameters/pmsparametersmockwebapi.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule, app_route_1.routing, selfservice_module_1.SelfServiceModule, navigation_module_1.NavigationModule, pmsparameters_module_1.PMSParametersModule, angular2_datatable_1.DataTableModule, angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(pmsparametersmockwebapi_service_1.PMSParametersMockWebApiervice)],
            declarations: [app_component_1.AppComponent, index_2.AlertComponent, login_component_1.LoginComponent],
            providers: [
                index_3.AuthGuard,
                index_1.AlertService,
                index_1.AuthenticationService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map