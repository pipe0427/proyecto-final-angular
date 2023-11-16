import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  admin!:boolean
  usuarios:Usuario[] = []

  constructor(private usuarioService:UsuarioService) {
  }

  ngOnInit(){
    this.listarUsuario()
  }

  listarUsuario(){
    this.usuarioService.getUsuarios().subscribe(usuarios =>{
      console.log(usuarios) 
      this.usuarios = usuarios;
      console.log(sessionStorage.getItem('user'));
      const email = sessionStorage.getItem('user')
      for(let usuario of usuarios){
        if(usuario.email == email ){
          if(usuario.role == 'admin'){
            this.admin = true
            
          }else{
            this.admin = false
          }
        }
      }
      console.log(this.admin);
    })
    
  }
  

  
}
