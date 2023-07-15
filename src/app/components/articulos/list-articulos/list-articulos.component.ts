import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/interfaces/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-list-articulos',
  templateUrl: './list-articulos.component.html',
  styleUrls: ['./list-articulos.component.css'],
  providers: [HttpClient]
})
export class ListArticulosComponent implements OnInit {
  listArticulos: Articulo[] = []

  constructor(private _articuloService: ArticuloService) {
  }
  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts() {
    this._articuloService.getListArticulos().subscribe((data: Articulo[]) => {
      this.listArticulos = data;
    })
  }

}
