import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';
import { Pedido } from '../interfaces/pedido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = enviroment.endpoint;
    this.myApiUrl = 'api/pedidos/';
    console.log(this.myAppUrl);
    console.log(this.myApiUrl);
  }

  getListPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

}
