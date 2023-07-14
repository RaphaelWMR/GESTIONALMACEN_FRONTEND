import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListPedidosComponent } from './components/list-pedidos/list-pedidos.component';
import { AddEditPedidoComponent } from './components/add-edit-pedido/add-edit-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListPedidosComponent,
    AddEditPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
