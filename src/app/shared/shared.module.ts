import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaComponent } from './pages/acerca/acerca.component';



@NgModule({
  declarations: [InicioComponent, AcercaComponent],
  imports:      [CommonModule],
  exports:      [InicioComponent, AcercaComponent]
})
export class SharedModule { }
