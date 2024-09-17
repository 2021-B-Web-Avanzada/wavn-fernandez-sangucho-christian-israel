import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SeasonComponent } from './componentes/season/season.component';
import { ChapterComponent } from './componentes/chapter/chapter.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TemporadasComponent } from './componentes/temporadas/temporadas.component';
import { CapitulosComponent } from './componentes/capitulos/capitulos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SeasonComponent,
    ChapterComponent,
    InicioComponent,
    TemporadasComponent,
    CapitulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
