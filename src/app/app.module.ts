import { HrModule } from "./hr/hr.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { AlertService, AuthenticationService } from "./services/index";
import { AlertComponent } from "./directives/index";
import { LoginComponent } from "./login/login.component";

import { routing } from "./app.route";
import { AuthGuard } from "./services/index";
import { SelfServiceModule } from "./selfservice/selfservice.module";
import { NavigationModule } from "./navigation/navigation.module";
import { PMSParametersModule } from "./pmsparameters/pmsparameters.module";
import { DataTableModule } from "angular2-datatable";

import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppInMemoryWebAPIService } from "./mockdata/app.inmemorywebapi.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    SelfServiceModule,
    NavigationModule,
    PMSParametersModule,
    DataTableModule,
    HrModule /* ,
    InMemoryWebApiModule.forRoot(AppInMemoryWebAPIService, {
      passThruUnknownUrl: true
    }) */
  ],
  declarations: [AppComponent, AlertComponent, LoginComponent],
  exports: [],
  providers: [AuthGuard, AlertService, AuthenticationService],

  bootstrap: [AppComponent]
})
export class AppModule {}
