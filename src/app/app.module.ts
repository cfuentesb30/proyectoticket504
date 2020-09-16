import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarPerfilComponent } from './features/editar-perfil/editar-perfil.component';
import { AgregarTarjetaComponent } from './features/agregar-tarjeta/agregar-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    EditarPerfilComponent,
    AgregarTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
