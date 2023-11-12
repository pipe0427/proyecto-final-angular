import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc } from '@angular/fire/firestore';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { deleteDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore:Firestore,private http:HttpClient) { }
  

  addProduct(product: Product){
    const productRef = collection(this.firestore, 'products')
    return addDoc(productRef,product)
  }

  getProducts(): Observable<Product[]>{
    const productRef = collection(this.firestore,'products');
    return collectionData(productRef, {idField: 'id'}) as Observable<Product[]>
  }

  deleteProduct(product:Product):boolean{
    const productDocRef = doc(this.firestore,`products/${product.id}`)

    if (productDocRef != null){
      deleteDoc(productDocRef)
      return true
    }else{
      return false
    } 
  }

}
