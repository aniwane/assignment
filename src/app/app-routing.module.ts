import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HighchartComponent } from './highchart/highchart.component';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [

  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'forget',
    component: ForgetPasswordComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'livestatus',
    component: HighchartComponent
  },
  {
    path:'graph',
    component:GraphComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
