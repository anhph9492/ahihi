import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';
import {take} from 'rxjs/operators';

declare var document: any;

@Injectable({
  providedIn: 'root'
})
export class GlobalCacheService {
  currentUser: BehaviorSubject<any>;
  constructor(
    public db: AngularFireDatabase,
  ) {
  }
  getUserOnline(uid: any): any {
    this.db.list('user').valueChanges().pipe(take(1)).subscribe(lstUser => {
      return lstUser.find((u: any) => u.uid === uid);
    });
  }
}
