import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {EmployeesPageComponent} from "./employees-page/employees-page.component";
import {EmploymentPageComponent} from "./employment-page/employment-page.component";
import {VacanciesPageComponent} from "./vacancies-page/vacancies-page.component";

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'main', component: MainPageComponent},
  {path: 'employees', component: EmployeesPageComponent},
  {path: 'employment', component: EmploymentPageComponent},
  {path: 'vacancies', component: VacanciesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
