import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent} from './login.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {
            path: '',
            component: LoginComponent
        }
    ])
  ],
  providers: []
})
export class LoginModule { }
