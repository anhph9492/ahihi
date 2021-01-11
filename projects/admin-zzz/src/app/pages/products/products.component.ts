import {Component, OnInit} from '@angular/core';
import {DynamicScriptAndStyleLoaderService} from '../../../../../utils/src/lib/services/dynamic-loader.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-products-component',
  templateUrl: 'products.component.html',
  styles: []
})

export class ProductsComponent implements OnInit {
  productDialog = false;

  product: any;

  selectedProducts: any;

  submitted = false;

  products: any;

  statuses = [{label: 'In Stock', value: 'INSTOCK'}, {label: 'Low Stock', value: 'LOWSTOCK'}, {label: 'Out of Stock', value: 'OUTOFSTOCK'}];

  constructor(
    public loader: DynamicScriptAndStyleLoaderService,
    public http: HttpClient,
  ) {

  }

  ngOnInit(): void {
    this.loader.loadAllStyle('./assets/css/bootstrap.css', './assets/css/style.css');

    // this.http.get('assets/products.json').subscribe((val: any) => {
    //   this.products = val;
    // });
  }

}

