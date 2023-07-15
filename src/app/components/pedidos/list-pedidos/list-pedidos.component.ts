import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/interfaces/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-list-pedidos',
  templateUrl: './list-pedidos.component.html',
  styleUrls: ['./list-pedidos.component.css']
})
export class ListPedidosComponent implements OnInit {

  listPedidos: Pedido[] = [
  ]

  constructor(private _pedidoService: PedidoService) {

  }
  ngOnInit(): void {
    this.getListPedidos();
  }

  getListPedidos() {
    this._pedidoService.getListPedidos().subscribe((data: Pedido[]) => {
      this.listPedidos = data;
    })
  }

}
