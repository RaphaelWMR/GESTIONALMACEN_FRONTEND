import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {
  id: number;
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private aRouter: ActivatedRoute) {
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
    this.form = this.fb.group({
      id: [''],
      solicitante: [''],
      estado: ['']
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getPedido(id: Number) {

  }

}
