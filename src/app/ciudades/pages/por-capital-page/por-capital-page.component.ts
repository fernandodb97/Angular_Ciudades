import { Component } from '@angular/core';
import { ServicioCiudades } from '../../services/ciudades.service';
import { Ciudades } from '../../interfaces/ciudades';
@Component({
  selector: 'app-por-capital-page',
  templateUrl: './por-capital-page.component.html'
})
export class PorCapitalPageComponent {

  constructor(private servicioCiudades: ServicioCiudades){}
  
  public ciudades: Ciudades[] = [];

  buscarPorCapital(term:any):void{
    
    this.servicioCiudades.buscaCapital(term).subscribe(ciudades => { this.ciudades = ciudades; });

  }

}
