import { Routes, RouterModule } from '@angular/router';
import { SelfServiceRootComponent } from '../selfservice/selfserviceroot.componet';
import { AuthGuard } from '../services/auth.guard';
import { SelfServiceHomeComponent } from  '../selfservice/selfservicehome.component';;

const appRoutes: Routes = [
    { path: '', component: SelfServiceRootComponent, canActivate: [AuthGuard]  },
  
    { 
        path: 'selfservice', component: SelfServiceRootComponent, 
          children: [
                { path: 'home', component: SelfServiceHomeComponent }
          ] , canActivate: [AuthGuard] 
      },
    
    // otherwise redirect to home
   
];

export const selfservicerouting = RouterModule.forChild(appRoutes);