import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaAppComponent} from "./rutas/ruta-app/ruta-app.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {RutaPostComponent} from "./rutas/ruta-post/ruta-post.component";
import {EstalogeadoGuard} from "./Servicios/auth/estalogeado.guard";
import {RutaForbiddenComponent} from "./rutas/ruta-forbidden/ruta-forbidden.component";
import {EsadministradorGuard} from "./Servicios/auth/esadministrador.guard";
//import * as path from "path";

const routes: Routes = [
  {
    path:'login',
    component: RutaLoginComponent,
  },
  {
    path:'forbidden',
    component:RutaForbiddenComponent,
  },
  {
    path:'lazy',
    loadChildren: ()=> import('./modulos/modulo-inventario/modulo-inventario.module')
      .then(m=> m.ModuloInventarioModule)
  },
  {
    path:'inicio',
    canActivate: [EstalogeadoGuard],
    component:RutaInicioComponent,
  },
  {
    path:'app',
    component:RutaAppComponent,
    children: [
      {
        path:'usuario',
        component:RutaUsuarioComponent,
      },
      {
        path:'post',
        canActivate:[EsadministradorGuard],
        component:RutaPostComponent,
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {useHash:true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
