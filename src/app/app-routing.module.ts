import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { EditarPerfilComponent } from 'src/app/features/editar-perfil/editar-perfil.component';
import { AgregarTarjetaComponent}  from 'src/app/features/agregar-tarjeta/agregar-tarjeta.component';
import { DetalleDeEventoComponent } from './features/detalle-de-evento/detalle-de-evento.component';
import { TablaDeEventosComponent } from './features/tabla-de-eventos/tabla-de-eventos.component';


const routes: Routes = [
{path: 'editarperfil', component: EditarPerfilComponent},
{path: 'agregartarjeta', component: AgregarTarjetaComponent}, 
{path: 'detalledeevento', component: DetalleDeEventoComponent}, 
{path: 'tabladeeventos', component: TablaDeEventosComponent} 

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
