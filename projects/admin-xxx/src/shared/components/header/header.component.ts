import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
// import {TranslateService} from '@ngx-translate/core';
import {Menu, NavService} from '../../../services/nav.service';
import {LayoutService} from '../../../services/layout.service';
import {AuthService} from '../../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: []
})
export class HeaderComponent implements OnInit {

  public menuItems: Menu[] = [];
  public elem: any;
  public items: Menu[] = [];
  public megaItems: Menu[] = [];

  public language = false;
  public search = false;
  public searchResult = false;
  public searchResultEmpty = false;
  public string: any;

  public text = '';

  public dark: boolean = this.layout.config.color.mix_background_layout === 'dark-only' ? true : false;

  public selectedLanguage: any = {
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  };

  public languages: any[] = [{
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  },
    {
      language: 'Español',
      code: 'es',
      icon: 'es'
    },
    {
      language: 'Français',
      code: 'fr',
      icon: 'fr'
    },
    {
      language: 'Português',
      code: 'pt',
      type: 'BR',
      icon: 'pt'
    }];

  constructor(
    // private translate: TranslateService,
    public layout: LayoutService,
    public navServices: NavService,
    @Inject(DOCUMENT) private document: any,
    public authService: AuthService) {
  }

  ngOnInit(): void {
    this.elem = document.documentElement;
    this.navServices.items.subscribe(menuItems => this.items = menuItems);
    this.navServices.megaItems.subscribe(megaItems => this.megaItems = megaItems);
  }

  changeLanguage(lang: any): void {
    // this.translate.use(lang.code);
    this.selectedLanguage = lang;
  }

  megaMenuToggle(): void {
    this.navServices.megaMenu = !this.navServices.megaMenu;
    this.language = false;
    this.search = false;
    if (window.innerWidth < 991) {
      this.navServices.collapseSidebar = true;
    }
  }

  languageToggle(): void {
    this.language = !this.language;
  }

  sidebarToggle(): void {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
    this.navServices.megaMenu = false;
    this.search = false;
    this.language = false;
  }

  layoutToggle(): void {
    this.dark = !this.dark;
    this.layout.config.color.mix_background_layout = this.dark ? 'dark-only' : 'light';
  }

  searchToggle(): void {
    this.search = !this.search;
    this.language = false;
  }

  searchTerm(term: any): any {
    // term ? this.addFix() : this.removeFix();
    // if (!term) {
    //   return this.menuItems = [];
    // }
    // let items = [];
    // term = term.toLowerCase();
    // this.items.filter(menuItems => {
    //   if (!menuItems?.title) {
    //     return false;
    //   }
    //   if (menuItems.title.toLowerCase().includes(term) && menuItems.type === 'link') {
    //     items.push(menuItems);
    //   }
    //   if (!menuItems.children) {
    //     return false;
    //   }
    //   menuItems.children.filter(subItems => {
    //     if (subItems.title.toLowerCase().includes(term) && subItems.type === 'link') {
    //       subItems.icon = menuItems.icon;
    //       items.push(subItems);
    //     }
    //     if (!subItems.children) {
    //       return false;
    //     }
    //     subItems.children.filter(suSubItems => {
    //       if (suSubItems.title.toLowerCase().includes(term)) {
    //         suSubItems.icon = menuItems.icon;
    //         items.push(suSubItems);
    //       }
    //     });
    //   });
    //   this.checkSearchResultEmpty(items);
    //   this.menuItems = items;
    // });
  }

  checkSearchResultEmpty(items: any): any {
    if (!items.length) {
      this.searchResultEmpty = true;
    } else {
      this.searchResultEmpty = false;
    }
  }

  addFix(): any {
    this.searchResult = true;
    document.getElementsByTagName('body')[0].classList.add('offcanvas');
  }

  removeFix(): any {
    this.searchResult = false;
    this.text = '';
    document.getElementsByTagName('body')[0].classList.remove('offcanvas');
  }

  toggleFullScreen(): any {
    this.navServices.fullScreen = !this.navServices.fullScreen;
    if (this.navServices.fullScreen) {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
      }
    } else {
      if (!this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

  // Click Toggle menu
  toggletNavActive(item: any): void {
    if (!item.active) {
      this.megaItems.forEach((a: any) => {

        if (this.megaItems.includes(item)) {
          a.active = false;
        }

        if (!a.children) {
          return false;
        }

        a.children.forEach((b: any) => {
          if (a.children.includes(item)) {
            b.active = false;
          }
        });

        return true;
      });
    }
    item.active = !item.active;
  }

}
