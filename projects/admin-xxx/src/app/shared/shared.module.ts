import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {ContentComponent} from '../layouts/content/content.component';
// import {HeaderComponent} from './components/header/header.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ContentComponent } from '../layouts/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { FeatherIconsComponent } from './components/feather-icons/feather-icons.component';

@NgModule({
  declarations: [
    ContentComponent,
    HeaderComponent,
    FeatherIconsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule { }
