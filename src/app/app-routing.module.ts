import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { EditarPerfilComponent } from 'src/app/features/editar-perfil/editar-perfil.component';
import { AgregarTarjetaComponent}  from 'src/app/features/agregar-tarjeta/agregar-tarjeta.component';
import { DetalleDeEventoComponent } from './features/detalle-de-evento/detalle-de-evento.component';
import { TablaDeEventosComponent } from './features/tabla-de-eventos/tabla-de-eventos.component';
import { ContactanosComponent} from "./features/contactanos/contactanos.component";
import { RecuperarClaveComponent} from "./features/recuperar-clave/recuperar-clave.component";
import { SesionUsuarioComponent} from "./features/sesion-usuario/sesion-usuario.component";
import {TicketsdeusuarioComponent} from './features/ticketsdeusuario/ticketsdeusuario.component';


const routes: Routes = [
{path: 'editarperfil', component: EditarPerfilComponent},
{path: 'agregartarjeta', component: AgregarTarjetaComponent}, 
{path: 'detalledeevento', component: DetalleDeEventoComponent}, 
{path: 'tabladeeventos', component: TablaDeEventosComponent},
{path: 'ticketsusuarios', component: TicketsdeusuarioComponent},
{path:'contactanos',component:ContactanosComponent},{path: 'recuperarclave',component:RecuperarClaveComponent},{path: 'sesionusuario',component:SesionUsuarioComponent}];
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
