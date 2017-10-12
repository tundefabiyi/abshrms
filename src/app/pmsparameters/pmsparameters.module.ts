import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PMSParametersService } from "./pmsparameters.service";
import { PMSParametersRootComponent } from "./pmsparametersroot.component";
import { AuthGuard } from "../services/auth.guard";
import { PMSParametersHomeComponent } from "./pmsparametershome.component";
import { pmsparametersrouting } from "./pmsparameters.route";
import { NavigationModule } from "../navigation/navigation.module";
import { AppDirectivesModule } from "../directives/appdirectives.module";
import { AlertService, AuthenticationService } from "../services/index";
import { KPIMgtComponent } from "../pmsparameters/kpimanagement/kpimgt.component";
import { DataTableModule } from "angular2-datatable";
import { DataTablesModule } from "angular-datatables";
import { KPIListFilterPipe } from "../pmsparameters/kpimanagement/kpilist-filter.pipe";
import { CompetencyItemSetupComponent } from "../pmsparameters/competencymanagement/competencyitemsetup.component";
import { AppraisalPeriodSetupComponent } from "../pmsparameters/appraisalperiod/appraisalperiodsetup.component";
import { AppraisalReviewPeriodSetupComponent } from "../pmsparameters/appraisalreviewperiodsetup/appraisalreviewperiodsetup.component";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { CompetencyItemDetailSetupComponent } from "../pmsparameters/competencyitemdetailsetup/competencyitemdetailsetup.component";
import { CompetencymeasurementComponent } from "./competencymeasurement/competencymeasurement.component";
import { CompetencymeasurementService } from "./competencymeasurement/competencymeasurement.service";
import { LineitemssetupComponent } from "./lineitemssetup/lineitemssetup.component";
import { AddcompetencyitemdetailComponent } from "./addcompetencyitemdetail/addcompetencyitemdetail.component";
import { PerformancetemplateComponent } from "./performancetemplate/performancetemplate.component";
import { PerformanceService } from "./performancetemplate/performance.service";
import { PerformancelineitemComponent } from './performancelineitem/performancelineitem.component';
import { SamplepageComponent } from './samplepage/samplepage.component';
import { CompetencytemplatedetailComponent } from './competencytemplatedetail/competencytemplatedetail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    pmsparametersrouting,
    NavigationModule,
    AppDirectivesModule,
    DataTableModule,
    DataTablesModule
  ],
  declarations: [
    PMSParametersRootComponent,
    PMSParametersHomeComponent,
    KPIMgtComponent,
    KPIListFilterPipe,
    CompetencyItemSetupComponent,
    AppraisalPeriodSetupComponent,
    AppraisalReviewPeriodSetupComponent,
    CompetencyItemDetailSetupComponent,
    CompetencymeasurementComponent,
    LineitemssetupComponent,
    AddcompetencyitemdetailComponent,
    PerformancetemplateComponent,
    PerformancelineitemComponent,
    SamplepageComponent,
    CompetencytemplatedetailComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    PMSParametersService,
    CompetencymeasurementService,
    PerformanceService
  ],
  exports: [KPIMgtComponent]
})
export class PMSParametersModule {}
