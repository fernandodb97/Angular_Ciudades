import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./shared/pages/inicio/inicio.component";
import { AcercaComponent } from "./shared/pages/acerca/acerca.component";
import { ContactoComponent } from "./shared/pages/contacto/contacto.component";

const routes: Routes=[{path: 'inicio',   component:InicioComponent},
                      {path: 'acerca',   component:AcercaComponent},
                      {path: 'contacto', component:ContactoComponent},
                      {path: 'ciudades', loadChildren:() =>import('./ciudades/ciudades.module').then(modulo => modulo.CiudadesModule)},
                      {path: '**',       redirectTo:'ciudades'}]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}
