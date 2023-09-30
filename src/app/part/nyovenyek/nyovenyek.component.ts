import { Component } from '@angular/core';
import { map } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { KosarService } from 'src/app/services/kosar.service';

@Component({
  selector: 'app-nyovenyek',
  templateUrl: './nyovenyek.component.html',
  styleUrls: ['./nyovenyek.component.css']
})
export class NyovenyekComponent {

  novenyek: any;
  keresendo:string=""
  
  constructor(private base: BaseService, private kosar:KosarService) {
    this.base.getNovenyek().snapshotChanges().pipe(
      map((ch) => ch.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    ).subscribe(
      (adatok) => this.novenyek = adatok
    )
  }
  addTetel(key:any, db:any){
    this.kosar.addTetel(key, db)
  }
}
