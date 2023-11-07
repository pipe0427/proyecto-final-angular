import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './login/login/login.component'
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { UsuarioComponent } from './usuario/usuario/usuario.component';

const routes: Routes = [  
  {path: '',redirectTo:'/login',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component:DashboardComponent,...canActivate(() => redirectUnauthorizedTo(['/usuario'])),
    children:[
      {path:'',redirectTo:'/dashboard/main', pathMatch: 'full'},
      {path:'usuario', loadChildren:() => import('./usuario/usuario.module').then(m=>m.UsuarioModule)},
      {path:'main', loadChildren:() =>import('./main/main.module').then(m=>m.MainModule)},
      {path: 'shirts', loadChildren:() => import('./shirts/shirts.module').then(m=>m.ShirtsModule)},
      {path: 'mugs', loadChildren:() => import('./mugs/mugs.module').then(m=>m.MugsModule)},
      {path: 'handBags', loadChildren:() => import('./hand-bags/hand-bags.module').then(m=>m.HandBagsModule)},
      {path: 'us',loadChildren:() => import('./us/us.module').then(m=>m.UsModule)},
      {path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule)},
      {path: 'listar', loadChildren: () => import('./listar-usuarios/listar-usuarios.module').then(m => m.ListarUsuariosModule)},
      {path: 'editar', loadChildren: () => import('./editar-usuario/editar-usuario.module').then(m => m.EditarUsuarioModule)}
    ]},
    {path:'usuario', component: UsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
