import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './pages/home/home.module#HomeModule'
  },
  {
    path: 'blocks',
    pathMatch: 'full',
    loadChildren: './pages/blocks/blocks.module#BlocksModule'
  },
  {
    path: 'block',
    loadChildren: './pages/block/block.module#BlockModule'
  },
  {
    path: 'transaction',
    loadChildren: './pages/transaction/transaction-routing.module#TransactionRoutingModule'
  },
  {
    path: 'address',
    loadChildren: './pages/address/address-routing.module#AddressRoutingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
