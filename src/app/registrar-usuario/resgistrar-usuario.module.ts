import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistrarUsuarioComponent 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],exports:[
    RegistrarUsuarioComponent
  ]
})
export class ResgistrarUsuarioModule { }
