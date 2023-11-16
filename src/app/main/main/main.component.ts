import { Component, OnInit } from '@angular/core';
import { Storage,getDownloadURL,listAll,ref } from '@angular/fire/storage';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  products!:Product[]

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
      this.products = productos;
      console.log(this.products);
       
    })
  }
  
}
