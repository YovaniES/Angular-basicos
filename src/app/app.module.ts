import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { PoderesComponent } from './heroes/poderes/poderes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    PoderesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
