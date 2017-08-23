"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var appRoutes = [
    // { path: '', component: LoginComponent },
    { path: 'login', component: login_component_1.LoginComponent }
    //{ path: '**', component: LoginComponent }
    // otherwise redirect to home
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.route.js.map