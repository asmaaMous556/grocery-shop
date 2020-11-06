import { Component, OnInit } from '@angular/core';
import { product} from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart:product[]=[];


  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.cartservice.getCart().subscribe(cart=>{
      console.log(cart);
      this.cart=cart.map(product=>{
        return {
          id:product.payload.doc.id,
          amount:product.payload.doc.data()['amount'],
          price:product.payload.doc.data()['price'],
          name:product.payload.doc.data()['name'],
          imageUrl:product.payload.doc.data()['imageUrl'],

        }
      })
    })}

}
