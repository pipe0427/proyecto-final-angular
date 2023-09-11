import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShirtsComponent } from './shirts/shirts.component';
import { MugsComponent } from './mugs/mugs.component';
import { HandBagsComponent } from './hand-bags/hand-bags.component';
import { MainComponent } from './main/main.component';
import { UsComponent } from './us/us.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  {path: '',component:MainComponent},
  {path: 'home',component:MainComponent},
  {path: 'shirts', component:ShirtsComponent},
  {path: 'mugs', component:MugsComponent},
  {path:'handBags', component:HandBagsComponent},
  {path:'us',component:UsComponent},
  {path: 'loggin', component:RegistrarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
