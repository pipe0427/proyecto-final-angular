import { Injectable } from '@angular/core';
import { Contants } from '../constant/constants';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/login';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlBase = environment.API_URL
  url= Contants.VALIDATE_WITH_LOGIN
  
  constructor(private http: HttpClient) {
    
  }

  login(login:Login) {
    const options = {
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer '+ environment.ACCESS_TOKEN
      }
    }
    let json = JSON.stringify(login)
    return this.http.post<any>(this.urlBase+this.url,json,options)
  }
}
