import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { user } from '../models/users';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user:user;
  constructor(private afStore :AngularFirestore) { }
  
  // save(user:firebase.User){

  //   this.afStore.doc('/users/'+this.authService.userId).set({
  //     name:user.displayName,
  //     email:user.email
  //   })
  //     }

  addNewUser(user:firebase.User){
   return this.afStore.doc('users/'+user.uid).set({
      id:user.uid,
      name:user.displayName,
      email:user.email,
      isAdmin:this.user.isAdmin
    })

  }

  getUser(uid:string):Observable<user>{
    return this.afStore.doc<user>('/users/'+uid).valueChanges();
  }
}
