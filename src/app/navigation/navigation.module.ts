import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertService, AuthenticationService } from '../services/index';
import { MenuComponent } from './menu.component';
import {  RouterModule } from '@angular/router';
//import { AuthGuard } from '../services/auth.guard';
//import { SelfServiceHomeComponent } from  '../selfservice/selfservicehome.component';;

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule,RouterModule],
    declarations: [MenuComponent],
    providers: [        
        AlertService,
        AuthenticationService
    ],
    exports: [
    MenuComponent
  ]
})
export class NavigationModule { }  