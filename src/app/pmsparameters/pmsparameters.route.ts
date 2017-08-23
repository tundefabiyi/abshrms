import { Routes, RouterModule } from '@angular/router';
import { PMSParametersRootComponent } from './pmsparametersroot.component';
import { AuthGuard } from '../services/auth.guard';
import { PMSParametersHomeComponent } from './pmsparametershome.component';;
import { KPIMgtComponent } from '../pmsparameters/kpimanagement/kpimgt.component';
import { CompetencyItemSetupComponent } from '../pmsparameters/competencymanagement/competencyitemsetup.component';
import { AppraisalPeriodSetupComponent } from '../pmsparameters/appraisalperiod/appraisalperiodsetup.component';
import { AppraisalReviewPeriodSetupComponent } from '../pmsparameters/appraisalreviewperiodsetup/appraisalreviewperiodsetup.component';

const appRoutes: Routes = [

    {
        path: 'pmsparameters', component: PMSParametersRootComponent,
        children: [
            { path: 'home', component: PMSParametersHomeComponent },
            { path: 'kpi', component: KPIMgtComponent },
            { path: 'competencysetup', component: CompetencyItemSetupComponent },
            { path: 'appraisalperiodsetup', component: AppraisalPeriodSetupComponent },
            { path: 'appraisalreviewperiodsetup', component: AppraisalReviewPeriodSetupComponent }
        ], canActivate: [AuthGuard]
    }

];

export const pmsparametersrouting = RouterModule.forChild(appRoutes);