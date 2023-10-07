import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HandBagsRoutingModule } from './hand-bags-routing.module';
import { HandBagsComponent } from './hand-bags/hand-bags.component';


@NgModule({
  declarations: [
    HandBagsComponent
  ],
  imports: [
    CommonModule,
    HandBagsRoutingModule
  ], exports:[
    HandBagsComponent
  ]
})
export class HandBagsModule { }
