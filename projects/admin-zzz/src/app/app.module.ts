import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {DbconnectModule} from '../../../utils/src/lib/dbconnect/dbconnect.module';
import {HeaderComponent} from './shared/components/header/header.component';
import {SidebarComponent} from './shared/components/sidebar/sidebar.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    DbconnectModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
