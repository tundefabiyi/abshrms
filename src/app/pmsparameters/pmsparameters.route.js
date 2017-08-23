"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var pmsparametersroot_component_1 = require("./pmsparametersroot.component");
var auth_guard_1 = require("../services/auth.guard");
var pmsparametershome_component_1 = require("./pmsparametershome.component");
;
var kpimgt_component_1 = require("../pmsparameters/kpimanagement/kpimgt.component");
var competencyitemsetup_component_1 = require("../pmsparameters/competencymanagement/competencyitemsetup.component");
var appraisalperiodsetup_component_1 = require("../pmsparameters/appraisalperiod/appraisalperiodsetup.component");
var appRoutes = [
    {
        path: 'pmsparameters', component: pmsparametersroot_component_1.PMSParametersRootComponent,
        children: [
            { path: 'home', component: pmsparametershome_component_1.PMSParametersHomeComponent },
            { path: 'kpi', component: kpimgt_component_1.KPIMgtComponent },
            { path: 'competencysetup', component: competencyitemsetup_component_1.CompetencyItemSetupComponent },
            { path: 'appraisalperiodsetup', component: appraisalperiodsetup_component_1.AppraisalPeriodSetupComponent }
        ], canActivate: [auth_guard_1.AuthGuard]
    }
];
exports.pmsparametersrouting = router_1.RouterModule.forChild(appRoutes);
//# sourceMappingURL=pmsparameters.route.js.map