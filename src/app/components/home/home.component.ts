import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { good } from 'src/app/models/goods';
import { CartService } from 'src/app/services/cart.service';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
goods:good[]=[]
goodsObservable:Subscription;
addedItem:number= -1;
  
   constructor(private goodsService:GoodsService, private cart:CartService) {
     
    }
 

  ngOnInit(): void {
  this.goodsObservable=  this.goodsService.getAll().subscribe(data=>{
     this.goods= data.map(element=>{
        return{
          id:element.payload.doc.id,
          name:element.payload.doc.data()['name'],
          price:element.payload.doc.data()['price'],
          imageUrl:element.payload.doc.data()['imageUrl'],
        // ...(element.payload.doc.data() as object) 
        }
      })
    })
  }

  AddToCart(index :number){
   this.addedItem= +index ;
  }
  buy(amount:number){
   let selectedItem= this.goods[this.addedItem];
   let data ={
     name:selectedItem.name,
     amount:+amount,
     price:selectedItem.price,
     imageUrl:selectedItem.imageUrl,
   } 
 this.cart.AddToCart(data).then( add=>this.addedItem= -1);
  }

  ngOnDestroy(): void {
   this.goodsObservable.unsubscribe();
  }

}
