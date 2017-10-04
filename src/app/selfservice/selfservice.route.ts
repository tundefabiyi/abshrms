import { MyevaluationComponent } from "./myevaluation/myevaluation.component";
import { MycompetencyappraisalComponent } from "./mycompetencyappraisal/mycompetencyappraisal.component";
import { SetgoalsComponent } from "./setgoals/setgoals.component";
import { Routes, RouterModule } from "@angular/router";
import { SelfServiceRootComponent } from "../selfservice/selfserviceroot.componet";
import { AuthGuard } from "../services/auth.guard";
import { SelfServiceHomeComponent } from "../selfservice/selfservicehome.component";
import { PerformanceresultComponent } from "./performanceresult/performanceresult.component";
import { GoalsettingComponent } from "./goalsetting/goalsetting.component";

const appRoutes: Routes = [
  { path: "", component: SelfServiceRootComponent, canActivate: [AuthGuard] },

  {
    path: "selfservice",
    component: SelfServiceRootComponent,
    children: [
      { path: "home", component: SelfServiceHomeComponent },
      { path: "performanceresult", component: PerformanceresultComponent },
      { path: "goalsetting", component: GoalsettingComponent },
      { path: "setgoals", component: SetgoalsComponent },
      { path: "manageappraisal", component: MycompetencyappraisalComponent },
      { path: "myevaluation", component: MyevaluationComponent }
    ],
    canActivate: [AuthGuard]
  }

  // otherwise redirect to home
];

export const selfservicerouting = RouterModule.forChild(appRoutes);
