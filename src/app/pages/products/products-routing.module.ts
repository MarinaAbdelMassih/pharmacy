import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './products-details/product-details.component';

const routes: Routes = [
  {
    path: 'products/:id',
    component: ProductsListComponent
  },
  {
    path: 'products/brand/:id',
    component: ProductsListComponent
  },
  {
    path: 'products/search/:keyword',
    component: ProductsListComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
