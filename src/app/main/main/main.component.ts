import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  products!:Product[]

  constructor(
    private productService:ProductService
  ){
  }
  ngOnInit(){
    this.listarProductos()
  }

  listarProductos(){
    this.productService.getProducts().subscribe(productos =>{
      console.log(productos) 
      this.products = productos;
    })
  }
}
