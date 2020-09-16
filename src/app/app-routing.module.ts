import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetallePagoComponent} from './features/detalle-pago/detalle-pago.component';
import {MensajeConfirmacionComponent} from './features/mensaje-confirmacion/mensaje-confirmacion.component';


const routes: Routes = [
  {path:'detallepago', component: DetallePagoComponent},
  {path:'mensajeconfirmacion', component: MensajeConfirmacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

