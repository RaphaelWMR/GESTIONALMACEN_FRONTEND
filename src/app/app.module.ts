import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddEditPedidoComponent } from './components/pedidos/add-edit-pedido/add-edit-pedido.component';
import { RegistroPedidoComponent } from './components/pedidos/registro-pedido/registro-pedido.component';
import { DetallePedidoComponent } from './components/pedidos/detalle-pedido/detalle-pedido.component';
import { ListPedidosComponent } from './components/pedidos/list-pedidos/list-pedidos.component';
import { AddArticuloPedidoComponent } from './components/pedidos/add-articulo-pedido/add-articulo-pedido.component';
import { ActualizarPedidoComponent } from './components/pedidos/actualizar-pedido/actualizar-pedido.component';
import { ActualizarArticuloPedidoComponent } from './components/pedidos/actualizar-articulo-pedido/actualizar-articulo-pedido.component';
import { ListArticulosComponent } from './components/articulos/list-articulos/list-articulos.component';
import { MenuPrincipalComponent } from './menus/menu-principal/menu-principal.component';
import { MenuAlmacenistaComponent } from './menus/menu-almacenista/menu-almacenista.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListPedidosComponent,
    AddEditPedidoComponent,
    RegistroPedidoComponent,
    DetallePedidoComponent,
    AddArticuloPedidoComponent,
    ActualizarPedidoComponent,
    ActualizarArticuloPedidoComponent,
    ListArticulosComponent,
    MenuPrincipalComponent,
    MenuAlmacenistaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
