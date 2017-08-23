import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PMSParametersService } from './pmsparameters.service';
import { PMSParametersRootComponent } from './pmsparametersroot.component';
import { AuthGuard } from '../services/auth.guard';
import { PMSParametersHomeComponent } from  './pmsparametershome.component';;
import { pmsparametersrouting }        from './pmsparameters.route';
import { NavigationModule } from '../navigation/navigation.module';
import { AppDirectivesModule } from '../directives/appdirectives.module';
import { AlertService, AuthenticationService } from '../services/index';
import { KPIMgtComponent } from '../pmsparameters/kpimanagement/kpimgt.component';
import {DataTableModule} from "angular2-datatable";
import { DataTablesModule } from 'angular-datatables';
import {KPIListFilterPipe} from "../pmsparameters/kpimanagement/kpilist-filter.pipe";
import { CompetencyItemSetupComponent } from '../pmsparameters/competencymanagement/competencyitemsetup.component';
import { AppraisalPeriodSetupComponent } from '../pmsparameters/appraisalperiod/appraisalperiodsetup.component';
import { AppraisalReviewPeriodSetupComponent } from '../pmsparameters/appraisalreviewperiodsetup/appraisalreviewperiodsetup.component';
 import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
 import { PMSParametersMockWebApiervice } from './pmsparametersmockwebapi.service';

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule, pmsparametersrouting,NavigationModule,AppDirectivesModule,DataTableModule,DataTablesModule, InMemoryWebApiModule.forRoot(PMSParametersMockWebApiervice)],
    declarations: [PMSParametersRootComponent, PMSParametersHomeComponent,
    KPIMgtComponent,KPIListFilterPipe,CompetencyItemSetupComponent,AppraisalPeriodSetupComponent, AppraisalReviewPeriodSetupComponent],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        PMSParametersService
    ],
    exports: [KPIMgtComponent]
})
export class PMSParametersModule { }  