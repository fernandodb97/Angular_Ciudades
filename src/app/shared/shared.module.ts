import { NgModule } from '@angular/core';

import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CajaBusquedaComponent } from './components/caja-busqueda/caja-busqueda.component';



@NgModule({
  declarations: [InicioComponent, AcercaComponent, ContactoComponent, BarraLateralComponent, CajaBusquedaComponent],
  imports:      [CommonModule, RouterModule],
  exports:      [InicioComponent, AcercaComponent, ContactoComponent, BarraLateralComponent, CajaBusquedaComponent]
})
export class SharedModule { }
