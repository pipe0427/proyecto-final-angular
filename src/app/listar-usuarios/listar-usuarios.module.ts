import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarUsuariosRoutingModule } from './listar-usuarios-routing.module';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';


@NgModule({
  declarations: [
    ListarUsuariosComponent
  ],
  imports: [
    CommonModule,
    ListarUsuariosRoutingModule
  ],exports:[
    ListarUsuariosComponent
  ]
})
export class ListarUsuariosModule { }
