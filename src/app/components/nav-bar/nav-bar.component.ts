import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { user } from 'src/app/models/users';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
isOpen:boolean=false;
isUser:boolean=false;
isAdmin:boolean=false;
user:user;
userName:string;
  constructor( private authservice: AuthService, private us :UserService) { }

  ngOnInit(): void {
   
    this.authservice.user.subscribe(user=>{
     if(user){
       this.userName=user.displayName;
      this.isUser=true;
      this.authservice.userId=user.uid;
      this.us.addNewUser(user);
     } 
     else {
      this.isUser=false;
      this.authservice.userId='';
     }
    })

    this.authservice.AppUser.subscribe(user=>{
      this.user=user
      console.log(this.user);
      if(this.user.isAdmin===true) {
        this.isAdmin=true;
      }
    })
    
  }

  toggleNavBar(){
this.isOpen=!this.isOpen;
  }

  loginWithGoogle(){
 this.authservice.login();
 
  }

  logout(){
    this.authservice.logout();
  }

}
