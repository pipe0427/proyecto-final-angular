import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  guardarDato(clave: string, valor: any): void {
    sessionStorage.setItem(clave, JSON.stringify(valor));
  }

  obtenerDato(clave: string): any {
    return sessionStorage.getItem(clave)
  }
}
