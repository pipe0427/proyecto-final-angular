import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SwalUtils } from 'src/app/util/swal-utils';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit{
  usuarios!: Usuario[];
  @Output() idUsuario = new EventEmitter<any>(); 
  respuesta!:any;

  constructor(private usuarioService: UsuarioService){

  }

  ngOnInit(): void{
    this.listar()
  }

  listar(){
    this.usuarioService.getUsuarios().subscribe(usuarios =>{
      console.log(usuarios) 
      this.usuarios = usuarios;
    })
  }

  async onClickDelete(usuario: Usuario){
    const response = await this.usuarioService.deleteUsuario(usuario)

    if(response){
      SwalUtils.customMessageOk('Eliminado','Se elimino correctamente el usuario')
    }else{
      SwalUtils.customMessageError('Ops! Hubo un error', 'No se elimino')  
    }
  }

  enviarUsuario(usuario:any){
    this.respuesta = usuario
    console.log(this.respuesta);
  }

  editarUsuario(){
  }
}
