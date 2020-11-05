import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { user } from '../models/users';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afStore :AngularFirestore,private authService:AuthService) { }
  
  // save(user:firebase.User){

  //   this.afStore.doc('/users/'+this.authService.userId).set({
  //     name:user.displayName,
  //     email:user.email
  //   })
  //     }

  get (uid:string){
    return this.afStore.doc('/users/'+uid).valueChanges();
  }
}