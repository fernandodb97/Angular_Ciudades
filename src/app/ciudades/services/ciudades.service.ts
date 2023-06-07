import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Ciudades } from '../interfaces/ciudades';

@Injectable({ providedIn: 'root' })
export class ServicioCiudades {
    constructor(private httpClient: HttpClient) { }
    
    private apiUrl:string = 'https://restcountries.com/v3.1';
    
    buscaCapital(term:string):Observable<Ciudades[]>{
        const url =`${ this.apiUrl }/capital/${ term }`;
        return this.httpClient.get<Ciudades[]>(url);

    }

}