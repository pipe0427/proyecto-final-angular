import { Component } from '@angular/core';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent {
  nombre:String = ''
  apellido:String = ''
  email:String = ''
  telefono:number = 0
  departamento:String = ''
  ciudad:String = ''
  contrasena:String = ''

  nombreNew:String = ''
  apellidoNew:String = ''
  emailNew:String = ''
  contrasenaNew:any = ''

  mostrar:boolean = false

  calculoEmail(email: any){
    this.emailNew = email
    if(this.mostrar){
      this.nombreNew = this.nombre
      this.nombre = ''
      this.apellidoNew = this.apellido
      this.apellido = ''
      this.telefono = 0
      this.email = ''
      this.departamento = ''
      this.ciudad = ''
      this.contrasena = ''
      this.mostrar = false
    }else{
      this.nombreNew = this.nombre
      this.nombre = ''
      this.apellidoNew = this.apellido
      this.apellido = ''
      this.telefono = 0
      this.email = ''
      this.departamento = ''
      this.ciudad = ''
      this.contrasena = ''
      this.mostrar = true
    }
  }
  calculoContrasena(contrasena:any){
    this.contrasenaNew = contrasena
  }
}
