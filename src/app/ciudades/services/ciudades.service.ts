import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

import { Ciudades } from '../interfaces/ciudades';

@Injectable({ providedIn: 'root' })
export class ServicioCiudades {
    constructor(private http: HttpClient) { }
    
    private apiUrl:string = 'https://restcountries.com/v3.1';
    
    buscaCapital(peticion:string):Observable<Ciudades[]>{
        const url =`${ this.apiUrl }/capital/${ peticion }`;
        return this.http.get<Ciudades[]>(url);

    }

}