import {Component, OnInit} from '@angular/core';
import {DynamicScriptAndStyleLoaderService} from '../../../../../utils/src/lib/services/dynamic-loader.service';
import {HttpClient} from '@angular/common/http';
import {ConfirmationService, MessageService} from 'primeng/api';


@Component({
  selector: 'app-products-component',
  templateUrl: 'products.component.html',
  styles: [
      `
      :host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
      }
    `
  ]
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
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {

  }

  ngOnInit(): void {
    this.http.get('assets/products.json').subscribe((val: any) => {
      this.products = val;
    });
  }

  openNew(): void {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts(): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter((val: any) => !this.selectedProducts.includes(val));
        this.selectedProducts = null;
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
      }
    });
  }


  deleteProduct(product: any): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter((val: any) => val.id !== product.id);
        this.product = {};
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
      }
    });
  }

  editProduct(product: any): void {
    this.product = {...product};
    this.productDialog = true;
  }

  hideDialog(): void {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct(): void {
    this.submitted = true;

    if (this.product.name.trim()) {
      if (this.product.id) {
        this.products[this.findIndexById(this.product.id)] = this.product;
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
      } else {
        this.product.id = this.createId();
        this.product.image = 'product-placeholder.svg';
        this.products.push(this.product);
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000});
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}


// const a = setInterval(() => {
//   if (document.getElementsByClassName('table-responsive product-table')) {
//     clearInterval(a);
//
//     // list product screen plugins
//     this.loader.loadAllStyle(...this.styles);
//     this.loader.loadAllScript(...this.scripts);
//   }
// }, 100);
