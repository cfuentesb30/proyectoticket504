import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TicketsdeusuarioComponent} from './features/ticketsdeusuario/ticketsdeusuario.component';

const routes: Routes = [
{path: 'ticketsusuarios', component: TicketsdeusuarioComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
