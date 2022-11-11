import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import {RoutingGuradService} from './routing-gurad.service';

const routes: Routes = [
{
  path:"login", component:LoginComponent
},
{
  path:"", component:SignupComponent
},
{
  path:"about", component:AboutComponent
},
{
  path:"dashboard", component:DashboardComponent,canActivate:[RoutingGuradService]
},
{
  path:"expense", 
  component:AddExpenseComponent,
  canActivate:[RoutingGuradService]
}        
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
