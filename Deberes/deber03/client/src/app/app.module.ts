import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AereopuertoFormComponent } from './components/aereopuerto-form/aereopuerto-form.component';
import { AereopuertoListComponent } from './components/aereopuerto-list/aereopuerto-list.component';

import {AereopuertosService} from  './services/aereopuertos.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AereopuertoFormComponent,
    AereopuertoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AereopuertosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
