import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShirtsComponent } from './shirts/shirts/shirts.component';
import { MugsComponent } from './mugs/mugs/mugs.component';
import { HandBagsComponent } from './hand-bags/hand-bags/hand-bags.component';
import { MainComponent } from './main/main/main.component';
import { UsComponent } from './us/us/us.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './login/login/login.component'

const routes: Routes = [  
  {path: '',redirectTo:'/login',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component:DashboardComponent,
    children:[
      {path:'',redirectTo:'/dashboard/main', pathMatch: 'full'},
      {path:'main', loadChildren:() =>import('./main/main.module').then(m=>m.MainModule)},
      {path: 'shirts', loadChildren:() => import('./shirts/shirts.module').then(m=>m.ShirtsModule)},
      {path: 'mugs', loadChildren:() => import('./mugs/mugs.module').then(m=>m.MugsModule)},
      {path: 'handBags', loadChildren:() => import('./hand-bags/hand-bags.module').then(m=>m.HandBagsModule)},
      {path: 'us',loadChildren:() => import('./us/us.module').then(m=>m.UsModule)}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
