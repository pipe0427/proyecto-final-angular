import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavModule } from './nav/nav.module';
import { HandBagsModule } from './hand-bags/hand-bags.module';
import { FooterModule } from './footer/footer.module';
import { MainModule } from './main/main.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NavModule,
    HandBagsModule,
    FooterModule,
    MainModule,
    SidenavModule,
    DashboardModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
