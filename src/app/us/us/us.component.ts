import { Component } from '@angular/core';
import { Contants } from 'src/app/constant/constants';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.css']
})
export class UsComponent {
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
        if(productos[i].type == Contants.CATEGORIA_LLAVEROS){
          this.products.push(productos[i])
        } 
      }
      console.log(this.products);
       
    })
  }
}
