import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Router } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    MainComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],exports:[
    MainComponent
  ]
})
export class MainModule {
  constructor(){

  }
 }
