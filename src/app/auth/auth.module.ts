import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';

@NgModule({
  declarations: [AuthComponent, SignInComponent, SignUpComponent, ForgotPasswordComponent, SetNewPasswordComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule
    ]
})
export class AuthModule { }
