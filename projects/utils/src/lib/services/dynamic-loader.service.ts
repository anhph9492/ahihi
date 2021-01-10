import {Injectable} from '@angular/core';

declare var document: any;

@Injectable({
  providedIn: 'root'
})

export class DynamicScriptAndStyleLoaderService {

  private script: any = [];
  private styles: any = [];

  // style
  // script
  constructor() {
  }

  loadScript(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const source = this.script.find((a: any) => a === url);
      if (source) {
        const obj = document.createElement('script');
        obj.src = url;
        document.getElementsByTagName('head')[0].appendChild(obj);
        resolve(url);
      }
    });
  }

  loadAllScript(...scriptUrls: string[]): Promise<any[]> {
    const pro: any[] = [];
    scriptUrls.forEach((url: any) => {
      this.script.push(url);
      pro.push(this.loadScript(url));
    });
    return Promise.all(pro);
  }

  loadStyle(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const source = this.styles.find((a: any) => a === url);
      if (source) {
        const obj = document.createElement('link');
        obj.rel = 'stylesheet';
        obj.type = 'text/css';
        obj.href = url;
        document.getElementsByTagName('body')[0].appendChild(obj);
        resolve(url);
      }
    });
  }

  loadAllStyle(...scriptUrls: string[]): Promise<any[]> {
    const pro: any[] = [];
    scriptUrls.forEach((url: any) => {
      this.styles.push(url);
      pro.push(this.loadStyle(url));
    });
    return Promise.all(pro);
  }

}
