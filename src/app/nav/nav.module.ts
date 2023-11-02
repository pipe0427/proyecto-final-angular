import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SearchModule } from '../search/search.module';
import { UsuarioModule } from '../usuario/usuario.module';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    SearchModule,
    UsuarioModule
  ],exports:[
    NavComponent
  ]
})
export class NavModule { }
