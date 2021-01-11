import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import {TableModule} from 'primeng/table';
// import {CalendarModule} from 'primeng/calendar';
// import {SliderModule} from 'primeng/slider';
// import {DialogModule} from 'primeng/dialog';
// import {MultiSelectModule} from 'primeng/multiselect';
// import {ButtonModule} from 'primeng/button';
// import {ToastModule} from 'primeng/toast';
// import {InputTextModule} from 'primeng/inputtext';
// import {ProgressBarModule} from 'primeng/progressbar';
// import {DropdownModule} from 'primeng/dropdown';
import {HttpClientModule} from '@angular/common/http';
// import {ContextMenuModule} from 'primeng/contextmenu';
// import {FileUploadModule} from 'primeng/fileupload';
// import {ToolbarModule} from 'primeng/toolbar';
// import {RatingModule} from 'primeng/rating';
// import {RadioButtonModule} from 'primeng/radiobutton';
// import {InputNumberModule} from 'primeng/inputnumber';
// import {ConfirmDialogModule} from 'primeng/confirmdialog';
// import {InputTextareaModule} from 'primeng/inputtextarea';
// import {ConfirmationService, MessageService} from 'primeng/api';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: ProductsComponent
    }]),
    // primeng
    // TableModule,
    // CalendarModule,
    // SliderModule,
    // DialogModule,
    // MultiSelectModule,
    // ContextMenuModule,
    // DropdownModule,
    // ButtonModule,
    // ToastModule,
    // InputTextModule,
    // ProgressBarModule,
    // HttpClientModule,
    // FileUploadModule,
    // ToolbarModule,
    // RatingModule,
    // RadioButtonModule,
    // InputNumberModule,
    // ConfirmDialogModule,
    // InputTextareaModule,
  ],
  providers: [
    // MessageService,
    // ConfirmationService
  ]
})
export class ProductsModule {
}
