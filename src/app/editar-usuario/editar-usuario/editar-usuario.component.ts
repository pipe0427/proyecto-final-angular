import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class EditarUsuarioComponent implements OnInit {
  formulario!: FormGroup;
  @Input() idUsuario:String = "";
  usuarios:Usuario[] = [];
  usuario!:Usuario;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router:Router
  ){
  }

  ngOnInit(){
    this.llenarCamposUsuario()
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
       SwalUtils.customMessageOk('Edito','Se edito correctamente el usuario')
     }else{
       this.router.navigateByUrl('dashboard')
       SwalUtils.customMessageError('Ops! Hubo un error', 'No se edito')  
     }
   }else{
    SwalUtils.customMessageError('Ops! Hubo un error', 'No se edito') 
   }

 }
 
llenarCamposUsuario(){
 console.log(this.idUsuario)
 this.usuarioService.getUsuarios().subscribe(usuarios =>{
   console.log(usuarios) 
   this.usuarios = usuarios;
   for (let index = 0; index < this.usuarios.length; index++) {
     if(this.usuarios[index].id == this.idUsuario){
       this.usuario = this.usuarios[index]
     }
   }

   this.formulario = this.reemplazarFormulario(this.usuario)
    
   })
  }

  reemplazarFormulario(usuario:Usuario):FormGroup{
      return this.fb.group({
          nombre: [usuario.nombre, [Validators.required,Validators.minLength(3)]],
          apellido: [usuario.apellido, [Validators.required,Validators.minLength(3)]],
          email: [usuario.email, [Validators.required,Validators.minLength(3)]],
          telefono: [usuario.telefono, [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
          departamento: [usuario.departamento, [Validators.required,Validators.minLength(3)]],
          ciudad: [usuario.ciudad, [Validators.required,Validators.minLength(3)]]
      })
    }

    editarUsuario(){

    }
}
