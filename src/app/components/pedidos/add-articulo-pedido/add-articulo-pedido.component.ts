import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-articulo-pedido',
  templateUrl: './add-articulo-pedido.component.html',
  styleUrls: ['./add-articulo-pedido.component.css']
})
export class AddArticuloPedidoComponent {
  id: number;

  constructor(private aRouter: ActivatedRoute) {
    this.id = Number(aRouter.snapshot.paramMap.get('id'));

  }
}
