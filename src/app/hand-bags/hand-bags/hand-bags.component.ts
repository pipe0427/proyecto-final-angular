import { Component } from '@angular/core';
import { Contants } from 'src/app/constant/constants';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-hand-bags',
  templateUrl: './hand-bags.component.html',
  styleUrls: ['./hand-bags.component.css']
})
export class HandBagsComponent {

  products:Product[] = []

  constructor(private productService:ProductService){

  }

  ngOnInit(){
    this.listarProductos()
  }


  listarProductos(){
    this.productService.getProducts().subscribe(productos =>{
      console.log(productos)
      for (let i = 0; i < productos.length; i++) {
        if(productos[i].type == Contants.CATEGORIA_HANG_BAGS){
          this.products.push(productos[i])
        } 
      }
      console.log(this.products);
       
    })
  }
}
