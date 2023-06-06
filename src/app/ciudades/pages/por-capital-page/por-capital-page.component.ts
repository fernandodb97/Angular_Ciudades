import { Component } from '@angular/core';

@Component({
  selector: 'app-por-capital-page',
  templateUrl: './por-capital-page.component.html'
})
export class PorCapitalPageComponent {


  buscarPorCapital(term:any):void{
    console.log("Se ingreso:   ");
    console.log({term});
  }
}
