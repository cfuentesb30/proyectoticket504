import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SesionUsuarioComponent } from './features/sesion-usuario/sesion-usuario.component';
import { ContactanosComponent } from './features/contactanos/contactanos.component';
import { RecuperarClaveComponent } from './features/recuperar-clave/recuperar-clave.component';

@NgModule({
  declarations: [
    AppComponent,
    SesionUsuarioComponent,
    ContactanosComponent,
    RecuperarClaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
