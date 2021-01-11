import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: 'create-post.component.html'
})

export class CreatePostComponent implements OnInit {
  fucktext: any = '';
  constructor() {
  }

  ngOnInit() {
  }

  check() {
    console.log(this.fucktext);
  }
}
