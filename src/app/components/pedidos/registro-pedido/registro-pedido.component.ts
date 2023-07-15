import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-pedido',
  templateUrl: './registro-pedido.component.html',
  styleUrls: ['./registro-pedido.component.css'],
  providers: [HttpClient]

})
export class RegistroPedidoComponent implements OnInit {

  solicitante = [
    { id: 1, nombre: "Psicologia" },
    { id: 2, nombre: "Biblioteca" },
    { id: 3, nombre: "Matricula" },
  ];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
