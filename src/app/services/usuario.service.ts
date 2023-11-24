import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc  } from '@angular/fire/firestore';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';
import { deleteDoc,updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore: Firestore) { }

  addUsuario(usuario:Usuario){
    const usuarioRef = collection(this.firestore, 'usuarios')
    return addDoc(usuarioRef,usuario)
  }

  getUsuarios(): Observable<Usuario[]>{
    const usuarioRef = collection(this.firestore,'usuarios');
    return collectionData(usuarioRef, {idField: 'id'}) as Observable<Usuario[]>
  }

  deleteUsuario(usuario:Usuario):boolean{
    const usuarioDocRef = doc(this.firestore,`usuarios/${usuario.id}`)

    if (usuarioDocRef != null){
      deleteDoc(usuarioDocRef)
      return true
    }else{
      return false
    } 
  }
}
