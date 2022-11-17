import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PatientPortalComponent } from './patient-portal/patient-portal.component';
import { HospitalPageComponent } from './hospital-page/hospital-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PatientPortalComponent,
    HospitalPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
