import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-pedido',
  templateUrl: './actualizar-pedido.component.html',
  styleUrls: ['./actualizar-pedido.component.css']
})
export class ActualizarPedidoComponent implements OnInit {
  solicitante = [
    { id: 1, nombre: "Psicologia" },
    { id: 2, nombre: "Biblioteca" },
    { id: 3, nombre: "Matricula" },
  ];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  id: number;

  constructor(private aRouter: ActivatedRoute) {
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }
}
