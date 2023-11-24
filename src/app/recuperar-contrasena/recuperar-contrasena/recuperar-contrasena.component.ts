import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { LoginService } from 'src/app/login/login.service';
import { SwalUtils } from 'src/app/util/swal-utils';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent {
  form!: FormGroup
  

  constructor(private fb: FormBuilder,
    private router:Router,
    private loginService:LoginService
    ) {

  }

  ngOnInit() {
    this.form = this.iniciarFormulario()
  }

  iniciarFormulario(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required]]
    })
  }


  onLogin() {
    const auth = getAuth()
    console.log(this.form.value)
   if (this.form.valid) {
    sendPasswordResetEmail(auth, this.form.get('email')?.value)
  .then(() => {
    SwalUtils.customMessageOk('Correo enviado', 'Se envio el correo de reestablecer la contraseña')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    SwalUtils.customMessageError('Ops! Hubo un error', 'Correo Incorrecto')      
  });
   } else {
      this.router.navigateByUrl('login')
      SwalUtils.customMessageError('Ops! Hubo un error', 'Correo Incorrecto')        
   }

  }
}
