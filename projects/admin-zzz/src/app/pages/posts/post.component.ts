import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html'
})

export class PostComponent implements OnInit {

  products = [];

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('assets/products.json').subscribe((val: any) => {
      this.products = val;
    });
  }
}
