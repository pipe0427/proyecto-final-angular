import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { SwalUtils } from 'src/app/util/swal-utils';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  loginForm!: FormGroup
  

  constructor(private fb: FormBuilder,
    private router:Router,
    private loginService: LoginService
    ) {

  }

  ngOnInit() {
    
    this.loginForm = this.iniciarFormulario()
  }

  iniciarFormulario(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.minLength(5)]]
    })

  }


  onLogin() {
    console.log(this.loginForm.value)
   if (this.loginForm.valid) {
     this.loginService.login(this.loginForm.get("email")?.value,this.loginForm.get("password")?.value).then(response => {
      console.log(response)
      sessionStorage.setItem("user", this.loginForm.get("email")?.value)
      this.router.navigateByUrl('dashboard')
      SwalUtils.customMessageOk('Bienvenido','login Correcto')   
     }).catch(error => {
      this.router.navigateByUrl('login')
      SwalUtils.customMessageError('Ops! Hubo un error', 'login Incorrecto')        
      console.log(error);
     })   
   } else {
      this.router.navigateByUrl('login')
      SwalUtils.customMessageError('Ops! Hubo un error', 'login Incorrecto')        
   }
   console.log(this.loginForm);

  }

  loginWithGoogle(){
    this.loginService.loginWithGoogle().then( response => {
      console.log(response)
      this.router.navigateByUrl('dashboard')
      SwalUtils.customMessageOk('Bienvenido','login Correcto')  
    }).catch(error => {
      this.router.navigateByUrl('login')
      SwalUtils.customMessageError('Ops! Hubo un error', 'login Incorrecto')        
      console.log(error);
     })
  }

}
