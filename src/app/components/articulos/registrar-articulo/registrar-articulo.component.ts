import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-articulo',
  templateUrl: './registrar-articulo.component.html',
  styleUrls: ['./registrar-articulo.component.css']
})
export class RegistrarArticuloComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(private router: Router) { }

  redirigirAMaestroArticulos() {
    this.router.navigateByUrl('/maestroArticulos');
  }
}
