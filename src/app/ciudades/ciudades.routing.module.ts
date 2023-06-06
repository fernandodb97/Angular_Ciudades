import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorCapitalPageComponent } from "./pages/por-capital-page/por-capital-page.component";
import { PorRegionPageComponent } from "./pages/por-region-page/por-region-page.component";
import { PorPaisPageComponent } from "./pages/por-pais-page/por-pais-page.component";
import { CiudadPageComponent } from './pages/ciudad-page/ciudad-page.component';

const routes: Routes=[{path: 'by/:id', component:CiudadPageComponent},
                      {path: 'porCapital',   component:PorCapitalPageComponent},
                      {path: 'porRegion',   component:PorRegionPageComponent},
                      {path: 'porPais', component:PorPaisPageComponent},
                      //{path: '**',       redirectTo:'by/:id'}
                    ]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class CiudadesRoutingModule {}