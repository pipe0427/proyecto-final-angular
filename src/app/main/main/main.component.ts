import { Component } from '@angular/core';
import { Storage,getDownloadURL,listAll,ref } from '@angular/fire/storage';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  products!:Product[]
  imagenes:String[]

  constructor(
    private productService:ProductService,
    private storage:Storage
  ){
    this.imagenes = []
  }
  ngOnInit(){
    this.listarProductos()
    this.iniciarImagenes()
  }

  listarProductos(){
    this.productService.getProducts().subscribe(productos =>{
      console.log(productos)
      this.products = productos;
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

  mostrarImagenes(product:Product):any{
    
    const palabra = product.img.toString().toLowerCase();
    for (let i = 0; i < this.imagenes.length; i++) {
      console.log(palabra);
      
      if((palabra.toLowerCase().includes(this.imagenes[i].toLowerCase())) == true){
      const element = this.imagenes[i];
      console.log(element);
      return element
      }
      
    }
  }

  
  
  
}
