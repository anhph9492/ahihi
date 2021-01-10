import {Component} from '@angular/core';
import {DynamicScriptAndStyleLoaderService} from '../../../utils/src/lib/services/dynamic-loader.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-zzz';

  constructor(
    public loader: DynamicScriptAndStyleLoaderService
  ) {
    const a = setInterval(() => {
      if (typeof $ !== 'undefined' && $('[data-feather]').length > 0) {
        clearInterval(a);

        // product screen plugins
        this.loader.loadAllScript(
          './assets/js/icons/feather-icon/feather.min.js',
          './assets/js/icons/feather-icon/feather-icon.js'
        );
      }
    }, 100);
  }
}
