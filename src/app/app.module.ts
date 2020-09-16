import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetallePagoComponent } from './features/detalle-pago/detalle-pago.component';
import { MensajeConfirmacionComponent } from './features/mensaje-confirmacion/mensaje-confirmacion.component';
import { NavegacionComponent } from './features/navegacion/navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    DetallePagoComponent,
    MensajeConfirmacionComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
