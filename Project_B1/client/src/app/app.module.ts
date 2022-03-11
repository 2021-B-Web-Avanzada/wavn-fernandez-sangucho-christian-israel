import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RutaIndexComponent } from './rutas/ruta-index/ruta-index.component';
import { RutaForbiddenComponent } from './rutas/ruta-forbidden/ruta-forbidden.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaProductoComponent } from './rutas/ruta-producto/ruta-producto.component';
import { RutaCrearCuentaComponent } from './rutas/ruta-crear-cuenta/ruta-crear-cuenta.component';
import { RutaDetalleComponent } from './rutas/ruta-detalle/ruta-detalle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { RutaGaleriaComponent } from './rutas/ruta-galeria/ruta-galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaIndexComponent,
    RutaForbiddenComponent,
    RutaNotFoundComponent,
    RutaLoginComponent,
    RutaProductoComponent,
    RutaCrearCuentaComponent,
    RutaDetalleComponent,
    RutaGaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
