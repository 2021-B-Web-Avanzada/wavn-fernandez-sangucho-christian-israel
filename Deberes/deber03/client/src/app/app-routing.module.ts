import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AereopuertoListComponent} from './components/aereopuerto-list/aereopuerto-list.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/aereopuertos',
    pathMatch: 'full'
  },
  {
    path: 'aereopuertos',
    component: AereopuertoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
