import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { SwalUtils } from 'src/app/util/swal-utils';
import { Storage, getDownloadURL, listAll, ref, uploadBytes } from '@angular/fire/storage';
import { Contants } from 'src/app/constant/constants';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {

  formulario!: FormGroup
  categorias = [Contants.CATEGORIA_CAMISETA,Contants.CATEGORIA_HANG_BAGS,Contants.CATEGORIA_LLAVEROS,Contants.CATEGORIA_MUG]
  file!:any

  constructor(
    private fb: FormBuilder,
    private router:Router,
    private productService: ProductService,
    private storage:Storage
  ){
  }

  ngOnInit(){
    this.formulario = this.iniciarFormulario()
  }

  iniciarFormulario():FormGroup{
    return this.fb.group({
      name: ['', [Validators.required,Validators.minLength(3)]],
      type: ['', [Validators.required,Validators.minLength(3)]],
      price: ['', [Validators.required,Validators.min(1)]],
      stock: ['', [Validators.required,Validators.min(1)]],
      descripcion: ['', Validators.required],
      img: ['', Validators.required]
    })
  }

  onSubmit(){
    console.log(this.formulario)
    
    const imgRef = ref(this.storage,`imagenes/${this.file.name}`)
          uploadBytes(imgRef,this.file).then(
            response => {
            getDownloadURL(response.ref).then(
              url => {
                this.formulario.value.img = url
                if(this.formulario.valid){
                  this.productService.addProduct(this.formulario.value).then(response => {
                   if(response != null){
                     console.log(response)
                     
                     
                     this.router.navigateByUrl('dashboard/main')
                     SwalUtils.customMessageOk('Agregado','Se agrego correctamente el producto')
                   }else{
                     SwalUtils.customMessageError('Ops! Hubo un error', 'No se agrego')  
                   }
                   })
                 }
              }
            )
            }
          )
  }
  uploadImage($event:any){
    this.file = $event.target.files[0]
    
  }
}
