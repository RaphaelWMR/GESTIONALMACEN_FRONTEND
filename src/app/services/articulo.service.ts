
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Articulo } from '../interfaces/articulo';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = enviroment.endpoint;
    this.myApiUrl = 'api/articulos/';
    console.log(this.myAppUrl);
    console.log(this.myApiUrl);
  }

  getListArticulos(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
