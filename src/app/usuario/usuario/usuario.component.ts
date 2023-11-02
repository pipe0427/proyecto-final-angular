import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { ProductService } from 'src/app/services/product.service';
import { SwalUtils } from 'src/app/util/swal-utils';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  formulario!: FormGroup;
  usuario:Usuario = new Usuario()

  constructor(
    private fb: FormBuilder,
    private productService:ProductService,
    private router:Router
  ){
  }

  ngOnInit(){
    this.formulario = this.iniciarFormulario()
  }

  iniciarFormulario():FormGroup{
    return this.fb.group({
        nombre: ['', [Validators.required,Validators.minLength(3)]],
        apellido: ['', [Validators.required,Validators.minLength(3)]],
        email: ['', [Validators.required,Validators.minLength(3)]],
        telefono: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
        departamento: ['', [Validators.required,Validators.minLength(3)]],
        ciudad: ['', [Validators.required,Validators.minLength(3)]],
        contrasena: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(6)]]
      
    })
  }

  async onSubmit(){
    if(this.formulario.valid){
      this.extractData()
      const response = await this.productService.addProduct(this.formulario.value)
      console.log("agrego")

      if(response != null){
        this.router.navigateByUrl('dashboard/main')
        SwalUtils.customMessageOk('Agregado','Se agrego correctamente el producto')
      }else{
        this.router.navigateByUrl('dashboard')
        SwalUtils.customMessageError('Ops! Hubo un error', 'No se agrego')  
      }
    }

  }

  extractData(){
    this.usuario.nombre = this.formulario.get("nombre")?.value
    this.usuario.apellido = this.formulario.get("apellido")?.value
    this.usuario.email = this.formulario.get("email")?.value
    this.usuario.telefono = this.formulario.get("telefono")?.value
    this.usuario.departamento = this.formulario.get("departamento")?.value
    this.usuario.ciudad = this.formulario.get("ciudad")?.value
    this.usuario.password = this.formulario.get("contrasena")?.value
  }
}
