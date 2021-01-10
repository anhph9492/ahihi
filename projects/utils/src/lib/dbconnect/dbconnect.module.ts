import {NgModule} from '@angular/core';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBbot7j3dPF5hbfc2o5_qmjXS476oLlph8',
  authDomain: 'banded-hexagon-275008.firebaseapp.com',
  databaseURL: 'https://banded-hexagon-275008.firebaseio.com',
  projectId: 'banded-hexagon-275008',
  storageBucket: 'banded-hexagon-275008.appspot.com',
  messagingSenderId: '1044881337458',
  appId: '1:1044881337458:web:3cc3f6d2101bce1a6fa6eb',
  measurementId: 'G-P6HRZWHB9V'
};

@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
})
export class DbconnectModule { }
