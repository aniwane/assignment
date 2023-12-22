import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule,DatePipe } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { CardModule } from 'primeng/card';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashHeaderComponent } from './dash-header/dash-header.component';
import { DashSidebarComponent } from './dash-sidebar/dash-sidebar.component';
import { DashUdnavComponent } from './dash-udnav/dash-udnav.component';
import { AvatarModule } from 'primeng/avatar';
import { HighchartComponent } from './highchart/highchart.component';
import { TabViewModule } from 'primeng/tabview';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphComponent } from './graph/graph.component';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { PiechartComponent } from './piechart/piechart.component';
import { SystemsizeComponent } from './systemsize/systemsize.component';
import { HtmlbarComponent } from './htmlbar/htmlbar.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { BargraphchartComponent } from './bargraphchart/bargraphchart.component';
import { UsagehistoryComponent } from './usagehistory/usagehistory.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ForgetPasswordComponent,
    SignInComponent,
    DashboardComponent,
    DashHeaderComponent,
    DashSidebarComponent,
    DashUdnavComponent,
    HighchartComponent,
  
    GraphComponent,
       PiechartComponent,
       SystemsizeComponent,
       HtmlbarComponent,
       WeatherComponent,
       BargraphchartComponent,
       UsagehistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    AvatarModule,
    TabViewModule,
    SidebarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PasswordModule,
    ButtonModule,
    SidebarModule,
    TabViewModule,
    CardModule,
    ButtonModule,
    RouterModule,
    HighchartsChartModule
    
    
  
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
