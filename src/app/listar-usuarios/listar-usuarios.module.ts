import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarUsuariosRoutingModule } from './listar-usuarios-routing.module';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { EditarUsuarioModule } from '../editar-usuario/editar-usuario.module';


@NgModule({
  declarations: [
    ListarUsuariosComponent
  ],
  imports: [
    CommonModule,
    ListarUsuariosRoutingModule,
    EditarUsuarioModule
  ],exports:[
    ListarUsuariosComponent
  ]
})
export class ListarUsuariosModule { }
