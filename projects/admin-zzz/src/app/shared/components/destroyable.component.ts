import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-core-destroyable',
  template: '',
})
export class DestroyableComponent implements OnDestroy {
  unsubscribeAll = new Subject<void>();

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
