import {Component, OnInit} from '@angular/core';
import {DynamicScriptAndStyleLoaderService} from '../../../../../../utils/src/lib/services/dynamic-loader.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html'
})

export class SidebarComponent implements OnInit {

  styles = [
    './assets/css/responsive.css'
  ];

  scripts = [
    './assets/js/sidebar-menu.js'
  ];

  constructor(
    public loader: DynamicScriptAndStyleLoaderService
  ) {
    const a = setInterval(() => {
      if (document.getElementById('mainnav')) {
        clearInterval(a);

        // list product screen plugins
        this.loader.loadAllStyle(...this.styles);
        this.loader.loadAllScript(...this.scripts);
      }
    }, 100);
  }

  ngOnInit() {
  }
}

// <script src="./assets/js/sidebar-menu.js"></script>

// ./assets/css/responsive.css
