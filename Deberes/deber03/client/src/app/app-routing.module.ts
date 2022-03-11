import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AereopuertoListComponent} from './components/aereopuerto-list/aereopuerto-list.component'
import {AereopuertoFormComponent} from "./components/aereopuerto-form/aereopuerto-form.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/aereopuertos',
    pathMatch: 'full'
  },
  {
    path: 'aereopuertos',
    component: AereopuertoListComponent
  },
  {
    path:"aereopuertos/add",
    component: AereopuertoFormComponent
  },
  {
    path:"aereopuertos/edit/:id",
    component:AereopuertoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
