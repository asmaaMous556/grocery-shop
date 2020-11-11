import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { user } from '../models/users';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {
user:user;
  constructor(private auth:AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if(this.auth.user.pipe(map(user=>this.user.isAdmin))){
      return true;
    }
    else return false;
    
  }
}
