import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SwalUtils } from 'src/app/util/swal-utils';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  admin!:boolean
  usuarios:Usuario[] = []

  constructor(private usuarioService:UsuarioService,
    private loginService:LoginService,
    private router:Router) {
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
