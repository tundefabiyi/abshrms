import { AppraisaltemplatesetupComponent } from "./appraisaltemplatesetup/appraisaltemplatesetup.component";
import { FinalratingheadersetupComponent } from "./finalratingheadersetup/finalratingheadersetup.component";
import { SetappraisalperiodComponent } from "./setappraisalperiod/setappraisalperiod.component";
import { CompetencyratingsetupComponent } from "./competencyratingsetup/competencyratingsetup.component";
import { PerformancescalesetupComponent } from "./performancescalesetup/performancescalesetup.component";
import { CompetencytemplatedetailComponent } from "./competencytemplatedetail/competencytemplatedetail.component";
import { SamplepageComponent } from "./samplepage/samplepage.component";
import { Routes, RouterModule } from "@angular/router";
import { PMSParametersRootComponent } from "./pmsparametersroot.component";
import { AuthGuard } from "../services/auth.guard";
import { PMSParametersHomeComponent } from "./pmsparametershome.component";
import { KPIMgtComponent } from "../pmsparameters/kpimanagement/kpimgt.component";
import { CompetencyItemSetupComponent } from "../pmsparameters/competencymanagement/competencyitemsetup.component";
import { AppraisalPeriodSetupComponent } from "../pmsparameters/appraisalperiod/appraisalperiodsetup.component";
import { AppraisalReviewPeriodSetupComponent } from "../pmsparameters/appraisalreviewperiodsetup/appraisalreviewperiodsetup.component";
import { CompetencyItemDetailSetupComponent } from "../pmsparameters/competencyitemdetailsetup/competencyitemdetailsetup.component";
import { CompetencymeasurementComponent } from "../pmsparameters/competencymeasurement/competencymeasurement.component";
import { LineitemssetupComponent } from "./lineitemssetup/lineitemssetup.component";
import { AddcompetencyitemdetailComponent } from "./addcompetencyitemdetail/addcompetencyitemdetail.component";
import { PerformancetemplateComponent } from "./performancetemplate/performancetemplate.component";
import { PerformancelineitemComponent } from "./performancelineitem/performancelineitem.component";

const appRoutes: Routes = [
  {
    path: "pmsparameters",
    component: PMSParametersRootComponent,
    children: [
      { path: "home", component: PMSParametersHomeComponent },
      { path: "kpi", component: KPIMgtComponent },
      { path: "competencysetup", component: CompetencyItemSetupComponent },
      {
        path: "appraisalperiodsetup",
        component: AppraisalPeriodSetupComponent
      },
      {
        path: "appraisalreviewperiodsetup",
        component: AppraisalReviewPeriodSetupComponent
      },
      {
        path: "competencyitemdetailsetup",
        component: CompetencyItemDetailSetupComponent
      },
      {
        path: "competencymeasurement",
        component: CompetencymeasurementComponent
      },
      {
        path: "lineitemssetup",
        component: LineitemssetupComponent
      },
      {
        path: "addcompetencyitemdetail",
        component: AddcompetencyitemdetailComponent
      },
      {
        path: "performancetemplates",
        component: PerformancetemplateComponent
      },
      {
        path: "performancelineitem",
        component: PerformancelineitemComponent
      },
      {
        path: "competencytemplatedetail",
        component: CompetencytemplatedetailComponent
      },
      {
        path: "performancescalesetup",
        component: PerformancescalesetupComponent
      },
      {
        path: "competencyscalesetup",
        component: CompetencyratingsetupComponent
      },
      {
        path: "setappraisalperiod",
        component: SetappraisalperiodComponent
      },
      {
        path: "finalratingheadersetup",
        component: FinalratingheadersetupComponent
      },
      {
        path: "appraisaltemplatesetup",
        component: AppraisaltemplatesetupComponent
      },
      {
        path: "sample",
        component: SamplepageComponent
      }
    ],
    canActivate: [AuthGuard]
  }
];

export const pmsparametersrouting = RouterModule.forChild(appRoutes);
