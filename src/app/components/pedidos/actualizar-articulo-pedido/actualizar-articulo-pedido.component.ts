import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-articulo-pedido',
  templateUrl: './actualizar-articulo-pedido.component.html',
  styleUrls: ['./actualizar-articulo-pedido.component.css']
})

export class ActualizarArticuloPedidoComponent implements OnInit {
  idPedido: number;
  idArticulo: number;
  constructor(private aRouter: ActivatedRoute) {
    this.idPedido = Number(aRouter.snapshot.paramMap.get('idpedido'));
    this.idArticulo = Number(aRouter.snapshot.paramMap.get('idarticulo'));
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}

