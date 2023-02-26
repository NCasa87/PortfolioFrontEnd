import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//los observables son eventos a los que nos vamos a suscribir y que nos iran llegando de forma asincrónica
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  //inyecto en el contructor el módulo de httpClient
  constructor(private http:HttpClient) { }
  
  //creación del método obtenerDatos. este servicio nos debería permitir acceder a los datos
  obtenerDatos():Observable<any>{
    return this.http.get('./assets/data/data.json');
  }
}

//el método get es el que me permite acceder a los recursos del servidor