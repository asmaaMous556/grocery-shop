import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { user } from '../models/users';
import { UserService } from './user.service';
import{switchMap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:Observable<firebase.User>;
  userId: string='';

  constructor(private afAuth: AngularFireAuth, private userService:UserService) {
  
    this.user= afAuth.user;
    
   }

  login(){
   return  this.afAuth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
  }

  logout()
{
  return  this.afAuth.signOut();
}


get AppUser():Observable<user>{
return this.user.pipe(switchMap(user=> // switchMap:emitting values only from the most recently projected Observable.
 {
   return this.userService.getUser(user.uid);
 }))
}

}
