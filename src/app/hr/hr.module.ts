import { FormsModule } from "@angular/forms";
import { HrService } from "./hr.service";
import { DataTableModule } from "angular2-datatable";
import { NavigationModule } from "./../navigation/navigation.module";
import { HttpModule } from "@angular/http";
import { AppDirectivesModule } from "./../directives/appdirectives.module";
import { BrowserModule } from "@angular/platform-browser";
import { HrRootComponent } from "./hrroot.component";
import { hrrouting } from "./hr.routes";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HrhomeComponent } from "./hrhome/hrhome.component";
import { HrappraisallistComponent } from "./hrappraisallist/hrappraisallist.component";
import { AppraisaldetailsComponent } from "./appraisaldetails/appraisaldetails.component";
import { ResolvecompetencyComponent } from "./resolvecompetency/resolvecompetency.component";
import { ResolveperformanceComponent } from './resolveperformance/resolveperformance.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppDirectivesModule,
    HttpModule,
    NavigationModule,
    FormsModule,
    DataTableModule,
    hrrouting
  ],
  declarations: [
    HrhomeComponent,
    HrRootComponent,
    HrappraisallistComponent,
    AppraisaldetailsComponent,
    ResolvecompetencyComponent,
    ResolveperformanceComponent
  ],
  providers: [HrService]
})
export class HrModule {}
