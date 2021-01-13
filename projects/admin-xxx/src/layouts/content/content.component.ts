import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as feather from 'feather-icons';

// import {fadeInAnimation} from '../../../data/router-animation/router-animation';
import {LayoutService} from '../../services/layout.service';
import {NavService} from '../../services/nav.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  // animations: [fadeInAnimation]
})
export class ContentComponent implements OnInit, AfterViewInit {

  constructor(
    public navServices: NavService,
    public layout: LayoutService
  ) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      feather.replace();
    });
  }

  public getRouterOutletState(outlet: any): void {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  ngOnInit(): void {

  }

}
