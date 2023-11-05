import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore: Firestore) { }

  addUsuario(usuario:Usuario){
    const usuarioRef = collection(this.firestore, 'usuario')
    return addDoc(usuarioRef,usuario)
  }

  getUsuarios(): Observable<Usuario[]>{
    const usuarioRef = collection(this.firestore,'usuarios');
    return collectionData(usuarioRef, {idField: 'id'}) as Observable<Usuario[]>
  }
}
