import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Compoenents
import { RegistroPedidoComponent } from './components/pedidos/registro-pedido/registro-pedido.component';
import { Eror404Component } from './components/eror404/eror404.component';
import { DetallePedidoComponent } from './components/pedidos/detalle-pedido/detalle-pedido.component';
import { ListPedidosComponent } from './components/pedidos/list-pedidos/list-pedidos.component';


const routes: Routes = [
  { path: 'maestroPedidos', component: ListPedidosComponent },
  { path: 'nuevoPedido', component: RegistroPedidoComponent },
  { path: 'detallePedido/:id', component: DetallePedidoComponent },
  { path: '**', component: Eror404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
