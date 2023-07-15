import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/interfaces/pedido';

@Component({
  selector: 'app-list-pedidos',
  templateUrl: './list-pedidos.component.html',
  styleUrls: ['./list-pedidos.component.css']
})
export class ListPedidosComponent implements OnInit {

  listPedidos: Pedido[] = [
    { id: 1, fecha: '2018-05-24', solicitante: 'Psicologia', estado: 'Activo' },
    { id: 2, fecha: '2018-06-19', solicitante: 'Biblioteeca', estado: 'Activo' }
  ]

  constructor() {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
