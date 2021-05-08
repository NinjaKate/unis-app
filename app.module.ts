import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { EmploymentPageComponent } from './employment-page/employment-page.component';
import { VacanciesPageComponent } from './vacancies-page/vacancies-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    EmployeesPageComponent,
    EmploymentPageComponent,
    VacanciesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
