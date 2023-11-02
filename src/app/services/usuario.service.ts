import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore: Firestore) { }

  addUsuario(usuario:Usuario){
    const usuarioRef = collection(this.firestore, 'usuario')
    return addDoc(usuarioRef,usuario)
  }
}
