import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Compoenents
import { ListPedidosComponent } from './components/list-pedidos/list-pedidos.component';
import { RegistroPedidoComponent } from './components/registro-pedido/registro-pedido.component';
import { Eror404Component } from './components/eror404/eror404.component';

const routes: Routes = [
  { path: 'maestroPedidos', component: ListPedidosComponent },
  { path: 'nuevoPedido', component: RegistroPedidoComponent },
  { path: '**', component: Eror404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
