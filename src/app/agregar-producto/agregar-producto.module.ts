import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarProductoRoutingModule } from './agregar-producto-routing.module';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';


@NgModule({
  declarations: [
    AgregarProductoComponent
  ],
  imports: [
    CommonModule,
    AgregarProductoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ], exports:[
    AgregarProductoComponent
  ]
})
export class AgregarProductoModule { }
