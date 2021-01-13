import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from '../layouts/content/content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    // children: [
    //   {
    //     path: 'dashboard',
    //     loadChildren: () => import('../')
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
