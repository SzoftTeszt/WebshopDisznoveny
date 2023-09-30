import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KosarService {
  tetelek:any=[]
  constructor() { }

  addTetel(key:any, db:any){
    let body:any={}
    body.novenyKey=key;
    body.db=db
    this.tetelek.push(body)
  }

  getTetelek(){
    return this.tetelek;
  }

  deleteTetelek(){
    this.tetelek=[]
  }

  torol(tetel:any){
    this.tetelek= this.tetelek.filter(
      (e:any)=> e != tetel
    )
  }
}
