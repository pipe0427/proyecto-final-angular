import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{

  idProduct: string =""
  products:Product[] = []
  

  constructor(private route:ActivatedRoute, private productService:ProductService){

  }
  ngOnInit(){
    this.listarProductos()
  }

  listarProductos(){
    this.route.params.subscribe(params => {
      console.log(params ['id']);
      this.idProduct = params ['id']
    })
    this.productService.getProducts().subscribe(productos =>{
      console.log(productos)
      this.products = productos;
    })
  }

  mostrarProducto():Product{
    var productResul:Product  = new Product()
    for (let i = 0; i < this.products.length; i++) {
      if(this.products[i].id == this.idProduct){
        productResul = this.products[i]
        return productResul
      }
    }
    return productResul
  }
}
