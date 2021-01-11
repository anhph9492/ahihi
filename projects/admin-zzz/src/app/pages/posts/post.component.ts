import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfirmationService, MessageService} from 'primeng/api';
import {FormControl, FormGroup} from '@angular/forms';
import {DynamicScriptAndStyleLoaderService} from '../../../../../utils/src/lib/services/dynamic-loader.service';

declare var $: any;

@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styles: ['post.component.scss']
})
export class PostComponent implements OnInit {
  products: any;
  postForm: FormGroup;

  scripts = [
    './assets/js/dropzone/dropzone-script.js',
    './assets/js/select2/select2.full.min.js',
    './assets/js/select2/select2-custom.js',
    './assets/js/email-app.js',
    './assets/js/form-validation-custom.js',
    './assets/js/tooltip-init.js'
  ];

  constructor(
    public http: HttpClient,
    public loader: DynamicScriptAndStyleLoaderService) {
    this.postForm = new FormGroup({
      key: new FormControl((new Date().getTime()).toString()),
      title: new FormControl('abcABC'),
      content: new FormControl('<p>fsdfsd</p>\n' +
        '<p><span style="background-color: #e03e2d;">fsdsdfsdfsdf<span style="background-color: #ced4d9;">sdfsdfsdfsddfsf<span style="background-color: #3598db;">dasdadasdasdasdasdasdasdasdas<span style="background-color: #fbeeb8;">asdadadadas</span></span></span></span></p>\n' +
        '<p><strong><span style="background-color: #e03e2d;"><span style="background-color: #ced4d9;"><span style="background-color: #3598db;"><span style="background-color: #fbeeb8;">asdasdasdassdad<em>dasdasdadasdasdasd</em></span></span></span></span></strong></p>')
    });
  }

  ngOnInit(): void {
    this.http.get('assets/products.json').subscribe((val: any) => {
      this.products = val;
    });
    const a = setInterval(() => {
      // @ts-ignore

      if (typeof $ !== 'undefined'
        && document.getElementsByClassName('post-component-check-textarea').length > 0
        && document.getElementsByClassName('post-component-check-upload').length > 0) {
        clearInterval(a);
        // product screen plugins
        this.loader.loadAllScript('./assets/js/editor/ckeditor/ckeditor.js').then(aa => {
          this.loader.loadAllScript('./assets/js/editor/ckeditor/adapters/jquery.js').then(bb => {
            this.loader.loadAllScript('./assets/js/dropzone/dropzone.js').then(cc => {
              debugger
              this.loader.loadAllScript(...this.scripts);
            });
          });
        });
      }
    }, 100);
  }

  save(): void {
    debugger
  }
}





