import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SwalUtils } from 'src/app/util/swal-utils';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  formulario!: FormGroup;
  @Input() usuario!:Usuario;

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

 onEdit(){
  const aux = null
   if(this.formulario.valid){
     const response = this.usuarioService.addUsuario(this.formulario.value)

     if(response != null){
       this.router.navigateByUrl('dashboard/main')
       SwalUtils.customMessageOk('Agregado','Se agrego correctamente el usuario')
     }else{
       this.router.navigateByUrl('dashboard')
       SwalUtils.customMessageError('Ops! Hubo un error', 'No se agrego')  
     }
   }else{
    SwalUtils.customMessageError('Ops! Hubo un error', 'No se agrego') 
   }

 }
 
 llenarCamposUsuario(usuario:Usuario){
  this.formulario.patchValue({ nombre: usuario.nombre, apellido: usuario.apellido});
 }
}
