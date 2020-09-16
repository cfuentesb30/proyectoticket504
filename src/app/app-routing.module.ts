import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { EditarPerfilComponent } from 'src/app/features/editar-perfil/editar-perfil.component';
import { AgregarTarjetaComponent}  from 'src/app/features/agregar-tarjeta/agregar-tarjeta.component';


const routes: Routes = [
{path: 'editarperfil', component: EditarPerfilComponent},
{path: 'agregartarjeta', component: AgregarTarjetaComponent} 

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
