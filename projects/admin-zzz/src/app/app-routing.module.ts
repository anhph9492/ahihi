import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'products',
        loadChildren: () => import('./pages/products/products.module').then(a => a.ProductsModule)
      },
      {
        path: 'posts',
        loadChildren: () => import('./pages/posts/post.module').then(a => a.PostsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
