import { Routes, RouterModule } from '@angular/router';


import { SelfServiceRootComponent } from './selfservice/selfserviceroot.componet';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
   // { path: '', component: LoginComponent },
     { path: 'login', component: LoginComponent }
      //{ path: '**', component: LoginComponent }

    // otherwise redirect to home
   
];

export const routing = RouterModule.forRoot(appRoutes);