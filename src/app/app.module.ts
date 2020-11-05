import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule,AngularFireAuth } from '@angular/fire/auth'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountComponent } from './components/account/account.component';
import { OrderComponent } from './components/order/order.component';
import { GoodsComponent } from './components/goods/goods.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    CartComponent,
    AccountComponent,
    OrderComponent,
    GoodsComponent,
    HomeComponent,
    NotFoundComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAF_wse5zmjaHQ_Oax5YQ3ZTNgP-RPNscE",
      authDomain: "gshop-6aa12.firebaseapp.com",
      databaseURL: "https://gshop-6aa12.firebaseio.com",
      projectId: "gshop-6aa12",
      storageBucket: "gshop-6aa12.appspot.com",
      messagingSenderId: "924564861322",
      appId: "1:924564861322:web:c8a53c90d6b44dda459873",
      measurementId: "G-ZKEC04JNTT"
    }),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
