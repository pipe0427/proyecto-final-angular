import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login';
import { LoginService } from '../login.service';
import { SwalUtils } from 'src/app/util/swal-utils';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup
  login: Login = new Login()
  

  constructor(private fb: FormBuilder,
    private router:Router,
    private loginService: LoginService) {

  }

  ngOnInit() {
    sessionStorage.clear()
    this.loginForm = this.iniciarFormulario()
  }

  iniciarFormulario(): FormGroup {
    return this.fb.group({
      username: ['electivaeam', [Validators.required]],
      password: ['electiva2023', [Validators.required,Validators.minLength(5)]]
    })

  }

  onLogin() {
    if (this.loginForm.valid) {
      this.extractData()
      this.loginService.login(this.login).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('dashboard')
        SwalUtils.customMessageOk('Bienvenido','login Correcto')        
      }, (error) => {
        this.router.navigateByUrl('login')
        console.log('1')
        SwalUtils.customMessageError('Ops! Hubo un error', 'login Incorrecto')        
        console.log(error);
        
      })      
    } else {
      this.router.navigateByUrl('login')
      SwalUtils.customMessageError('Ops! Hubo un error', 'login Incorrecto')        
    }
    console.log(this.loginForm);

  }

  extractData() {
    this.login.username = this.loginForm.get("username")?.value
    this.login.password = this.loginForm.value.password
  }

}
