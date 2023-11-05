import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { ProductService } from 'src/app/services/product.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SwalUtils } from 'src/app/util/swal-utils';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
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

 onRegister(){
  console.log(this.formulario)
   if(this.formulario.valid){
     const response = this.usuarioService.addUsuario(this.formulario.value)
     console.log("agrego")

     if(response != null){
       this.router.navigateByUrl('dashboard/main')
       SwalUtils.customMessageOk('Agregado','Se agrego correctamente el producto')
     }else{
       this.router.navigateByUrl('dashboard')
       SwalUtils.customMessageError('Ops! Hubo un error', 'No se agrego')  
     }
   }else{
    SwalUtils.customMessageError('Ops! Hubo un error', 'No se agrego') 
   }

 }
}
