import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MugsRoutingModule } from './mugs-routing.module';
import { MugsComponent } from './mugs/mugs.component';


@NgModule({
  declarations: [
    MugsComponent
  ],
  imports: [
    CommonModule,
    MugsRoutingModule
  ],exports:[
    MugsComponent
  ]
})
export class MugsModule { }
