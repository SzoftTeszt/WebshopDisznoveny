import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { KosarService } from 'src/app/services/kosar.service';

@Component({
  selector: 'app-rendeles',
  templateUrl: './rendeles.component.html',
  styleUrls: ['./rendeles.component.css']
})
export class RendelesComponent {
  tetelek:any;
  megrendeles:any={}
  novenyek:any=[];

  constructor(private kosar:KosarService, private base:BaseService, private router: Router)
{ 
  this.tetelek=this.kosar.getTetelek();
  this.base.getNovenyek().snapshotChanges().pipe(
    map((ch) => ch.map(c => ({ key: c.payload.key, ...c.payload.val() })))
  ).subscribe(
    (adatok) => this.novenyek = adatok
  )

}
torol(tetel:any){
  this.kosar.torol(tetel)
  this.tetelek=this.kosar.getTetelek();
}

ment(){
 this.megrendeles.rendeles=this.tetelek;
 this.megrendeles.statusz=false;
 this.megrendeles.datum=String(Date());
 this.base.addMegrendeles(this.megrendeles)
 this.router.navigate(['/novenyek'])
}

keresNev(key:string){
  if (this.novenyek.length==0) return null;
  return this.novenyek.filter(
    (a:any)=>a.key==key
  )[0].megnevezes
}


}


