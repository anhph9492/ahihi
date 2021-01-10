import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductsComponent} from './products.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent
      }
    ])
  ],
  providers: [],
})
export class ProductsModule { }
