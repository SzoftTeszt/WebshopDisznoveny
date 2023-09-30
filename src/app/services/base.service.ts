import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Noveny } from '../model/noveny';
import { Megrendeles } from '../model/megrendeles';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  refNovenyek: AngularFireList<Noveny>
  refMegrendelesek: AngularFireList<Megrendeles>

  constructor(private db:AngularFireDatabase) {
      this.refNovenyek=this.db.list('/novenyek')
      this.refMegrendelesek=this.db.list('/megrendelesek')

   }

   getNovenyek(){
    return this.refNovenyek;
   }

   addMegrendeles(body:any){
    return this.refMegrendelesek.push(body)
   }

}
