import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {DestroyableComponent} from '../../shared/components/destroyable.component';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';
import {GlobalCacheService} from '../../service/global-cache.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})

export class LoginComponent extends DestroyableComponent implements OnInit {
  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public router: Router,
    public globalCache: GlobalCacheService
  ) {
    super();

    this.afAuth.authState.pipe(take(1)).subscribe(session => {
      if (session) {
        const uid = session.uid;
        let user = globalCache.getUserOnline(uid);
        if (user) { // user existed in db
          // const role = user.role;
          // if (role === 'admin') {
          //   this.router.navigateByUrl('/admin/product');
          // } else {
          //   this.router.navigateByUrl('/login');
          // }
        } else { // user was not exist in db
          user = {
            uid: session.uid,
            email: session.email,
            phoneNumber: session.phoneNumber,
            displayName: session.displayName,
            role: 'client'
          };
          this.db.list('user').push(user);
        }
        console.log(`LoginComponent---uid---${user.uid}---${user.email}---${user.role}`);
      } else {
        console.log(`LoginComponent---uid---NULL`);
        // this.router.navigateByUrl('/login');
      }
    });
  }

  ngOnInit(): void {
  }

  loginWithGoogle(): void {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    this.afAuth.signInWithPopup(provider).then(u => console.log(u)).catch((error) => {
    });
  }
}
