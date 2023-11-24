import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecuperarContrasenaRoutingModule } from './recuperar-contrasena-routing.module';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RecuperarContrasenaComponent
  ],
  imports: [
    CommonModule,
    RecuperarContrasenaRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],exports:[RecuperarContrasenaComponent]
})
export class RecuperarContrasenaModule { }
