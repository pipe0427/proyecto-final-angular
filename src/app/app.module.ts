import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { HandBagsComponent } from './hand-bags/hand-bags.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { MugsComponent } from './mugs/mugs.component';
import { ComboComponent } from './combo/combo.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UsComponent } from './us/us.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { DatosUsusarioComponent } from './datos-ususario/datos-ususario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    HandBagsComponent,
    ShirtsComponent,
    MugsComponent,
    ComboComponent,
    SidenavComponent,
    UsComponent,
    FooterComponent,
    RegistrarUsuarioComponent,
    DatosUsusarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
