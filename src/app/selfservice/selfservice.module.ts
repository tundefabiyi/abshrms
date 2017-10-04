import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AlertService, AuthenticationService } from "../services/index";
import { SelfServiceRootComponent } from "../selfservice/selfserviceroot.componet";
import { AuthGuard } from "../services/auth.guard";
import { SelfServiceHomeComponent } from "../selfservice/selfservicehome.component";
import { selfservicerouting } from "./selfservice.route";
import { NavigationModule } from "../navigation/navigation.module";
import { AppDirectivesModule } from "../directives/appdirectives.module";
import { DataTableModule } from "angular2-datatable";
import { ProfileComponent } from "./profile/profile.component";
import { PerformanceresultComponent } from "./performanceresult/performanceresult.component";
import { SelfserviceService } from "./selfservice.service";
import { GoalsettingComponent } from './goalsetting/goalsetting.component';
import { SetgoalsComponent } from './setgoals/setgoals.component';
import { MycompetencyappraisalComponent } from './mycompetencyappraisal/mycompetencyappraisal.component';
import { MyevaluationComponent } from './myevaluation/myevaluation.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    selfservicerouting,
    NavigationModule,
    AppDirectivesModule,
    DataTableModule
  ],
  declarations: [
    SelfServiceRootComponent,
    SelfServiceHomeComponent,
    ProfileComponent,
    PerformanceresultComponent,
    GoalsettingComponent,
    SetgoalsComponent,
    MycompetencyappraisalComponent,
    MyevaluationComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    SelfserviceService
  ]
})
export class SelfServiceModule {}
