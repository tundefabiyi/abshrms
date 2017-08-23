import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertService, AuthenticationService } from '../services/index';
import { UserPanelComponent } from '../directives/index';
//import { AuthGuard } from '../services/auth.guard';
//import { SelfServiceHomeComponent } from  '../selfservice/selfservicehome.component';;

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule],
    declarations: [UserPanelComponent],
    providers: [        
        AlertService,
        AuthenticationService
    ],
    exports: [
    UserPanelComponent
  ]
})
export class AppDirectivesModule { }  