import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';
import { RouterModule } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';



@NgModule({
  declarations: [InicioComponent, AcercaComponent, BarraLateralComponent, ContactoComponent],
  imports:      [CommonModule, RouterModule],
  exports:      [InicioComponent, AcercaComponent, ContactoComponent,BarraLateralComponent]
})
export class SharedModule { }
