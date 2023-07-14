import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPedidosComponent } from './components/list-pedidos/list-pedidos.component';

const routes: Routes = [
  {path: '', component: ListPedidosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
