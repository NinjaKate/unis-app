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
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { AddNewRequestPageComponent } from './add-new-request-page/add-new-request-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    EmployeesPageComponent,
    EmploymentPageComponent,
    VacanciesPageComponent,
    AddNewRequestPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
