import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShirtsRoutingModule } from './shirts-routing.module';
import { ShirtsComponent } from './shirts/shirts.component';


@NgModule({
  declarations: [
    ShirtsComponent
  ],
  imports: [
    CommonModule,
    ShirtsRoutingModule
  ],exports:[
    ShirtsComponent
  ]
})
export class ShirtsModule { }
