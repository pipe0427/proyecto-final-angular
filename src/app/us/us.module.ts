import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsRoutingModule } from './us-routing.module';
import { UsComponent } from './us/us.component';


@NgModule({
  declarations: [
    UsComponent
  ],
  imports: [
    CommonModule,
    UsRoutingModule
  ],exports:[
    UsComponent
  ]
})
export class UsModule { }
