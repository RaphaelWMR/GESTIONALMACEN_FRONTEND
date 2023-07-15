import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css'],
  providers: [DatePipe]

})
export class MenuPrincipalComponent implements OnInit {
  fecha: string;
  constructor(private datePipe: DatePipe) {
    const fechaFormateada = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.fecha = fechaFormateada ?? "Error";
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
