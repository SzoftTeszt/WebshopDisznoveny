import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tomb:any[], keresendo:string): any {
    if (!keresendo) return tomb

    return tomb.filter(
      (e:any)=>e.megnevezes.includes(keresendo)
    )
    

  }

}
