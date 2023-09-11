import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-datos-ususario',
  templateUrl: './datos-ususario.component.html',
  styleUrls: ['./datos-ususario.component.css']
})
export class DatosUsusarioComponent {

  @Input() email:String = ''
  @Input() contrasena:String = ''
  
  @Output () emailHijo = new EventEmitter<String>()
  @Output () contrasenaHijo = new EventEmitter<String>()

  


  agregarUsuario(){
    this.emailHijo.emit(this.email)
    this.contrasenaHijo.emit(this.contrasena)
  }
}
