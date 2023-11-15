import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { LoginService } from 'src/app/login/login.service';
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
    private router:Router,
    private loginService:LoginService
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
        contrasena: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(6)]],
        role: ['user',Validators.required]
    })
  }

 onRegister(){
  console.log(this.formulario)
   if(this.formulario.valid){
     this.usuarioService.addUsuario(this.formulario.value).then(response => {
      if(response != null){
        this.loginService.register(this.formulario.get("email")?.value,this.formulario.get("contrasena")?.value).then(response => {
          console.log(response)
          if(response != null){
            this.router.navigateByUrl('dashboard/main')
            SwalUtils.customMessageOk('Agregado','Se agrego correctamente el usuario')
          }else{
            SwalUtils.customMessageError('Ops! Hubo un error', 'No se agrego')  
          }
         }).catch(error => console.log(error))
        this.router.navigateByUrl('dashboard/main')
        SwalUtils.customMessageOk('Agregado','Se agrego correctamente el usuario')
      }else{
        SwalUtils.customMessageError('Ops! Hubo un error', 'No se agrego')  
      }
     }).catch(error => {
      console.log(error)
      SwalUtils.customMessageError('Ops! Hubo un error', 'No se agrego') 
     })
    }else{
      SwalUtils.customMessageError('Ops! Hubo un error', 'No se agrego') 
    }

 }

 logout(){
  this.loginService.logout().then(resp => {
    this.router.navigateByUrl('login')
    SwalUtils.customMessageOk('Logout','Retornara a la pagina de login')
  }).catch( error => {
    console.log(error)
    SwalUtils.customMessageError('Ops! Hubo un error', 'No se pudo cerrar la sesión') 
  })
 }
}
