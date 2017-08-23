"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var selfserviceroot_componet_1 = require("../selfservice/selfserviceroot.componet");
var auth_guard_1 = require("../services/auth.guard");
var selfservicehome_component_1 = require("../selfservice/selfservicehome.component");
;
var appRoutes = [
    { path: '', component: selfserviceroot_componet_1.SelfServiceRootComponent, canActivate: [auth_guard_1.AuthGuard] },
    {
        path: 'selfservice', component: selfserviceroot_componet_1.SelfServiceRootComponent,
        children: [
            { path: 'home', component: selfservicehome_component_1.SelfServiceHomeComponent }
        ], canActivate: [auth_guard_1.AuthGuard]
    },
];
exports.selfservicerouting = router_1.RouterModule.forChild(appRoutes);
//# sourceMappingURL=selfservice.route.js.map