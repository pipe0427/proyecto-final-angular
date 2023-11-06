import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarUsuarioRoutingModule } from './editar-usuario-routing.module';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditarUsuarioComponent,
  ],
  imports: [
    CommonModule,
    EditarUsuarioRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],exports:[
    EditarUsuarioComponent
  ]
})
export class EditarUsuarioModule { }
