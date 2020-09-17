import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetallePagoComponent } from './features/detalle-pago/detalle-pago.component';
import { MensajeConfirmacionComponent } from './features/mensaje-confirmacion/mensaje-confirmacion.component';
import { NavegacionComponent } from './features/navegacion/navegacion.component';
import { SesionUsuarioComponent } from './features/sesion-usuario/sesion-usuario.component';
import { ContactanosComponent } from './features/contactanos/contactanos.component';
import { RecuperarClaveComponent } from './features/recuperar-clave/recuperar-clave.component';
import { EditarPerfilComponent } from './features/editar-perfil/editar-perfil.component';
import { AgregarTarjetaComponent } from './features/agregar-tarjeta/agregar-tarjeta.component';
import { DetalleDeEventoComponent } from './features/detalle-de-evento/detalle-de-evento.component';
import { TablaDeEventosComponent } from './features/tabla-de-eventos/tabla-de-eventos.component';

@NgModule({
  declarations: [
    AppComponent,

    DetallePagoComponent,
    MensajeConfirmacionComponent,
    NavegacionComponent,
    SesionUsuarioComponent,
    ContactanosComponent,
    RecuperarClaveComponent,
    EditarPerfilComponent,
    AgregarTarjetaComponent,
    DetalleDeEventoComponent,
    TablaDeEventosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
