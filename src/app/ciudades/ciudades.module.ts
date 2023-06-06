import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorCapitalPageComponent } from './pages/por-capital-page/por-capital-page.component';
import { PorRegionPageComponent } from './pages/por-region-page/por-region-page.component';
import { PorPaisPageComponent } from './pages/por-pais-page/por-pais-page.component';
import { CiudadesRoutingModule } from './ciudades.routing.module';
import { CiudadPageComponent } from './pages/ciudad-page/ciudad-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [CiudadPageComponent, PorCapitalPageComponent, PorRegionPageComponent, PorPaisPageComponent],
  imports: [CommonModule, CiudadesRoutingModule, SharedModule]
})
export class CiudadesModule { }
