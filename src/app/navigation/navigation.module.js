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
var menu_component_1 = require("./menu.component");
var router_1 = require("@angular/router");
//import { AuthGuard } from '../services/auth.guard';
//import { SelfServiceHomeComponent } from  '../selfservice/selfservicehome.component';;
var NavigationModule = (function () {
    function NavigationModule() {
    }
    NavigationModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule, router_1.RouterModule],
            declarations: [menu_component_1.MenuComponent],
            providers: [
                index_1.AlertService,
                index_1.AuthenticationService
            ],
            exports: [
                menu_component_1.MenuComponent
            ]
        })
    ], NavigationModule);
    return NavigationModule;
}());
exports.NavigationModule = NavigationModule;
//# sourceMappingURL=navigation.module.js.map