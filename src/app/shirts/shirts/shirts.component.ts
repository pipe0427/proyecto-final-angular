import { Component } from '@angular/core';
import { Contants } from 'src/app/constant/constants';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent {
  products!:Product[]
  camiseta:boolean =false

  constructor(
    private productService:ProductService,
    private storage:Storage
  ){
  }
  ngOnInit(){
    this.listarProductos() 
  }

  listarProductos(){
    this.productService.getProducts().subscribe(productos =>{
      console.log(productos)
      for (let i = 0; i < productos.length; i++) {
        if(productos[i].type == Contants.CATEGORIA_CAMISETA){
          this.products.push(productos[i])
        } 
      }
      console.log(this.products);
       
    })
  }


}
