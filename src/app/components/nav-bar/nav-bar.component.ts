import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/users';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
isOpen:boolean=false;
isUser:boolean=false;
user:user
  constructor( private authservice: AuthService) { }

  ngOnInit(): void {
    this.authservice.user.subscribe(user=>this.user);//get the data of the current user

    this.authservice.user.subscribe(user=>{
     if(user){
      this.isUser=true;
      this.authservice.userId=user.uid;
     } 
     else {
      this.isUser=false;
      this.authservice.userId='';
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
