import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavModule } from '../sidenav/sidenav.module';
import { NavModule } from '../nav/nav.module';
import { FooterModule } from '../footer/footer.module';
import { MainModule } from '../main/main.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidenavModule,
    NavModule,
    FooterModule,
    MainModule
  ],exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
