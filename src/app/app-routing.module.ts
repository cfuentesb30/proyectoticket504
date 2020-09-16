import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactanosComponent} from "./features/contactanos/contactanos.component";
import { RecuperarClaveComponent} from "./features/recuperar-clave/recuperar-clave.component";
import { SesionUsuarioComponent} from "./features/sesion-usuario/sesion-usuario.component";

 

const routes: Routes = [
  {path:'contactanos',component:ContactanosComponent},{path: 'recuperarclave',component:RecuperarClaveComponent},{path: 'sesionusuario',component:SesionUsuarioComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
