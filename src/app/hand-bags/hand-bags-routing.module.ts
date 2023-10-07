import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HandBagsComponent } from './hand-bags/hand-bags.component';

const routes: Routes = [
  {path:'',component: HandBagsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HandBagsRoutingModule { }
