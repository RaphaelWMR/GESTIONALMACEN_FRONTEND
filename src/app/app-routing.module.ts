import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Compoenents
import { RegistroPedidoComponent } from './components/pedidos/registro-pedido/registro-pedido.component';
import { Eror404Component } from './components/eror404/eror404.component';
import { DetallePedidoComponent } from './components/pedidos/detalle-pedido/detalle-pedido.component';
import { ListPedidosComponent } from './components/pedidos/list-pedidos/list-pedidos.component';
import { AddArticuloPedidoComponent } from './components/pedidos/add-articulo-pedido/add-articulo-pedido.component';
import { ActualizarPedidoComponent } from './components/pedidos/actualizar-pedido/actualizar-pedido.component';
import { MenuPrincipalComponent } from './menus/menu-principal/menu-principal.component';
import { ListArticulosComponent } from './components/articulos/list-articulos/list-articulos.component';
import { RegistrarArticuloComponent } from './components/articulos/registrar-articulo/registrar-articulo.component';


const routes: Routes = [
  /*Menu */
  { path: 'menu', component: MenuPrincipalComponent },

  /* Pedidos */
  { path: 'maestroPedidos', component: ListPedidosComponent },
  { path: 'nuevoPedido', component: RegistroPedidoComponent },
  { path: 'detallePedido/:id', component: DetallePedidoComponent },
  { path: 'modificarPedido/:id', component: ActualizarPedidoComponent },
  { path: 'agregarArticuloPedido/:id/', component: AddArticuloPedidoComponent },
  { path: 'modificarArticuloPedido/:idpedido/:idarticulo', component: AddArticuloPedidoComponent },
  /*Articulos*/
  { path: 'maestroArticulos', component: ListArticulosComponent },
  { path: 'nuevoArticulo', component: RegistrarArticuloComponent },
  { path: '', component: MenuPrincipalComponent },
  { path: '**', component: Eror404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
