import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolunkComponent } from './part/rolunk/rolunk.component';
import { NyovenyekComponent } from './part/nyovenyek/nyovenyek.component';
import { RendelesComponent } from './part/rendeles/rendeles.component';

const routes: Routes = [
  {path:"rolunk", component:RolunkComponent},
  {path:"novenyek", component:NyovenyekComponent},
  {path:"rendeles", component:RendelesComponent},
  {path:" ", redirectTo: '/rolunk'},
  {path:"**", redirectTo: '/rolunk'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
