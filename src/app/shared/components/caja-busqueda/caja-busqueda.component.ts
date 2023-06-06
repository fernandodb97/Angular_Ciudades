import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-caja-busqueda',
  templateUrl: './caja-busqueda.component.html',
})
export class CajaBusquedaComponent {

  @Input() public placeholder : string='';
  

  @Output() public valorBusqueda:EventEmitter<string> = new EventEmitter<string>(); 

  valorRecibido(valor:string):void{
    this.valorBusqueda.emit(valor);
  }
}
