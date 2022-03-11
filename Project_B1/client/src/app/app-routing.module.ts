import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaIndexComponent} from "./rutas/ruta-index/ruta-index.component";
import {RutaForbiddenComponent} from "./rutas/ruta-forbidden/ruta-forbidden.component";
import {RutaNotFoundComponent} from "./rutas/ruta-not-found/ruta-not-found.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaProductoComponent} from "./rutas/ruta-producto/ruta-producto.component";
import {RutaCrearCuentaComponent} from "./rutas/ruta-crear-cuenta/ruta-crear-cuenta.component";
import {RutaDetalleComponent} from "./rutas/ruta-detalle/ruta-detalle.component";
import {RutaGaleriaComponent} from "./rutas/ruta-galeria/ruta-galeria.component";

const routes: Routes = [
  {
    path: 'index',
    component: RutaIndexComponent,
  },
  {
    path: 'forbidden',
    component: RutaForbiddenComponent,
  },
  {
    path: 'not-found',
    component: RutaNotFoundComponent,
  },
  {
    path: 'login',
    component: RutaLoginComponent,
  },
  {
    path: 'producto',
    component: RutaProductoComponent,
  },
  {
    path: 'crear-cuenta',
    component: RutaCrearCuentaComponent,
  },
  {
    path: 'detalle',
    component: RutaDetalleComponent,
  },
  {
    path: 'galeria',
    component: RutaGaleriaComponent,
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: RutaNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
