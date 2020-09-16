import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SesionUsuarioComponent } from './features/sesion-usuario/sesion-usuario.component';
import { ContactanosComponent } from './features/contactanos/contactanos.component';
import { RecuperarClaveComponent } from './features/recuperar-clave/recuperar-clave.component';
import { EditarPerfilComponent } from './features/editar-perfil/editar-perfil.component';
import { AgregarTarjetaComponent } from './features/agregar-tarjeta/agregar-tarjeta.component';
import { DetalleDeEventoComponent } from './features/detalle-de-evento/detalle-de-evento.component';
import { TablaDeEventosComponent } from './features/tabla-de-eventos/tabla-de-eventos.component';
import { TicketsdeusuarioComponent } from 'src/app/features/ticketsdeusuario/ticketsdeusuario.component';


@NgModule({
  declarations: [
    AppComponent,
    
    SesionUsuarioComponent,
    ContactanosComponent,
    RecuperarClaveComponent,
    EditarPerfilComponent,
    AgregarTarjetaComponent,
    DetalleDeEventoComponent,
    TablaDeEventosComponent,
TicketsdeusuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
