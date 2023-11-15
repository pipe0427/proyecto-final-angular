import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Img } from '../model/img';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  constructor(private firestore:Firestore,private http:HttpClient) { }
  
  addImg(img:Img){
    const imgRef = collection(this.firestore, 'img')
    return addDoc(imgRef,img)
  }
  getImg(): Observable<Img[]>{
    const imgRef = collection(this.firestore,'img');
    return collectionData(imgRef, {idField: 'id'}) as Observable<Img[]>
  }
}
