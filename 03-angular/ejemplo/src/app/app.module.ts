import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Route, RouterModule, Routes} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaForbiddenComponent } from './rutas/ruta-forbidden/ruta-forbidden.component';
import { RutaAppComponent } from './rutas/ruta-app/ruta-app.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaPostComponent } from './rutas/ruta-post/ruta-post.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import {AuthServices} from "./Servicios/auth/auth.services";
import {EstalogeadoGuard} from "./Servicios/auth/estalogeado.guard";
import {EsadministradorGuard} from "./Servicios/auth/esadministrador.guard";


@NgModule({
  declarations: [//Componenetes
    AppComponent,
    RutaLoginComponent,
    RutaForbiddenComponent,
    RutaAppComponent,
    RutaInicioComponent,
    RutaPostComponent,
    RutaUsuarioComponent,
    RutaNotFoundComponent
  ],
  imports: [//Modulos Importados
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [//Servicios
    AuthServices,
    EstalogeadoGuard,
    EsadministradorGuard,
  ],
  bootstrap: [//Componente Principal
    AppComponent]
})
export class AppModule { }
