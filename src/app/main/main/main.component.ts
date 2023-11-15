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
  imagenes:String[]

  constructor(
    private productService:ProductService,
    private storage:Storage
  ){
    this.imagenes = []
  }
  ngOnInit(){
    this.iniciarImagenes()
    this.listarProductos() 
  }

  listarProductos(){
    this.productService.getProducts().subscribe(productos =>{
      console.log(productos)
      this.products = productos;
      for (let i = 0; i < this.imagenes.length; i++) {
          this.products[i].img = this.imagenes[i]
      }
      console.log(this.products);
       
    })
  }

  iniciarImagenes(){
    const imgRef = ref(this.storage,'imagenes')

    listAll(imgRef)
    .then(async response =>{
      console.log(response)
      for (let item of response.items) {
        const url = await getDownloadURL(item)
        this.imagenes.push(url)
        }
    })
    .catch(error => {
      console.log(error)
    })
  }
  
}
