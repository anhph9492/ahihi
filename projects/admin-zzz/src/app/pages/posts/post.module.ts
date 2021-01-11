import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PostComponent} from './post.component';
import {CreatePostComponent} from './create/create-post.component';
import {EditorModule} from '@tinymce/tinymce-angular';
// import {TableModule} from 'primeng/table';
// import {CalendarModule} from 'primeng/calendar';
// import {SliderModule} from 'primeng/slider';
// import {DialogModule} from 'primeng/dialog';
// import {MultiSelectModule} from 'primeng/multiselect';
// import {ContextMenuModule} from 'primeng/contextmenu';
// import {DropdownModule} from 'primeng/dropdown';
// import {ButtonModule} from 'primeng/button';
// import {ToastModule} from 'primeng/toast';
// import {InputTextModule} from 'primeng/inputtext';
// import {ProgressBarModule} from 'primeng/progressbar';
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
    PostComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: PostComponent
      },
      {
        path: 'create',
        component: CreatePostComponent
      }
    ]),
    HttpClientModule,
    EditorModule,
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
export class PostsModule {
}
