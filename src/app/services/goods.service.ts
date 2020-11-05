import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private fs: AngularFirestore) {
     
   }

   getAll(){
    return this.fs.collection('goods').snapshotChanges();
   }
}
