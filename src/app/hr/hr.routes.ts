import { ResolveperformanceComponent } from "./resolveperformance/resolveperformance.component";
import { ResolvecompetencyComponent } from "./resolvecompetency/resolvecompetency.component";
import { HrappraisallistComponent } from "./hrappraisallist/hrappraisallist.component";
import { AppraisaldetailsComponent } from "./appraisaldetails/appraisaldetails.component";
import { HrRootComponent } from "./hrroot.component";
import { HrhomeComponent } from "./hrhome/hrhome.component";
import { Routes, RouterModule } from "@angular/router";
import { SelfServiceRootComponent } from "../selfservice/selfserviceroot.componet";
import { AuthGuard } from "../services/auth.guard";

const appRoutes: Routes = [
  { path: "", component: SelfServiceRootComponent, canActivate: [AuthGuard] },

  {
    path: "hr",
    component: HrRootComponent,
    children: [
      { path: "home", component: HrhomeComponent },
      {
        path: "appraisallist",
        component: HrappraisallistComponent
      },
      {
        path: "appraisaldetails",
        component: AppraisaldetailsComponent
      },
      {
        path: "resolvecompetency",
        component: ResolvecompetencyComponent
      },
      {
        path: "resolveperformance",
        component: ResolveperformanceComponent
      }
    ],
    canActivate: [AuthGuard]
  }

  // otherwise redirect to home
];

export const hrrouting = RouterModule.forChild(appRoutes);
