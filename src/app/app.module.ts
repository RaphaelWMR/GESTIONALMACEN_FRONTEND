import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddEditPedidoComponent } from './components/pedidos/add-edit-pedido/add-edit-pedido.component';
import { RegistroPedidoComponent } from './components/pedidos/registro-pedido/registro-pedido.component';
import { DetallePedidoComponent } from './components/pedidos/detalle-pedido/detalle-pedido.component';
import { ListPedidosComponent } from './components/pedidos/list-pedidos/list-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListPedidosComponent,
    AddEditPedidoComponent,
    RegistroPedidoComponent,
    DetallePedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
