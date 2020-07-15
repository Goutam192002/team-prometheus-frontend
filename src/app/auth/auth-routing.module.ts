import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {SetNewPasswordComponent} from './set-new-password/set-new-password.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
      }, {
        path: 'sign-in',
        component: SignInComponent
      }, {
        path: 'sign-up',
        component: SignUpComponent
      }, {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      }, {
        path: 'set-new-password',
        component: SetNewPasswordComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
