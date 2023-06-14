import { Component, Input } from '@angular/core';
import { Ciudades } from '../../interfaces/ciudades';

@Component({
  selector: 'app-tabla-ciudades',
  templateUrl: './tabla-ciudades.component.html',
  styleUrls: ['./tabla-ciudades.component.css']
})
export class TablaCiudadesComponent {

  @Input()
  public ciudades: Ciudades[] = [];

}
