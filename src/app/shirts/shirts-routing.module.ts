import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShirtsComponent } from './shirts/shirts.component';

const routes: Routes = [
  {path: '', component:ShirtsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShirtsRoutingModule { }
