import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../services/usuario.service';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';

const routes: Routes = [
  {path:'',component:ListarUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarUsuariosRoutingModule{  
 }
