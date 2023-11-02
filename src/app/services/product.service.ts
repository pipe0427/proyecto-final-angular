import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore:Firestore,private http:HttpClient) { }
  

  addProduct(product: Product){
    const productRef = collection(this.firestore, 'product')
    return addDoc(productRef,product)
  }

}
