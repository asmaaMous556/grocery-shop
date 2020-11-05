import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { good } from '../models/goods';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private afStore:AngularFirestore, private authService:AuthService) { }
  

  AddToCart(data:good){
   return  this.afStore.collection('/users/'+this.authService.userId+'/cart').add(data);

  }

  getCart(){
  return  this.afStore.collection('/users/'+this.authService.userId+'/cart').snapshotChanges();
  }
}
