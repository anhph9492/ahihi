import {Component, OnInit} from '@angular/core';
import {DynamicScriptAndStyleLoaderService} from '../../../../../utils/src/lib/services/dynamic-loader.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-products-component',
  templateUrl: 'products.component.html'
})

export class ProductsComponent implements OnInit {

  styles = [
    // './assets/css/datatables.css',
    // './assets/css/datatables.css',
    // './assets/css/rating.css',
    // './assets/css/style.css'
  ];

  scripts = [
    // './assets/js/datatable/datatables/jquery.dataTables.min.js',
    // './assets/js/rating/jquery.barrating.js',
    // './assets/js/rating/rating-script.js',
    // './assets/js/owlcarousel/owl.carousel.js',
    // './assets/js/ecommerce.js',
    // './assets/js/product-list-custom.js',
    // './assets/js/tooltip-init.js'
  ];

  products: any[] = [];

  statuses = [{label: 'In Stock', value: 'INSTOCK'}, {label: 'Low Stock', value: 'LOWSTOCK'}, {label: 'Out of Stock', value: 'OUTOFSTOCK'}];

  constructor(
    public loader: DynamicScriptAndStyleLoaderService,
    public http: HttpClient
  ) {
    const a = setInterval(() => {
      if (document.getElementsByClassName('table-responsive product-table')) {
        clearInterval(a);

        // list product screen plugins
        this.loader.loadAllStyle(...this.styles);
        this.loader.loadAllScript(...this.scripts);
      }
    }, 100);
  }

  ngOnInit(): void {
    this.http.get('assets/products.json').subscribe((val: any) => {
      this.products = val;
    });
    // this.productsTest.getProductsSmall().then((lst: any[]) => this.products = lst);
  }
}
