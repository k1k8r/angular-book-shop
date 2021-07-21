import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginContainer } from './containers/login/login.container';
import { RegistrationContainer } from './containers/registration/registration.container';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    LoginContainer,
    RegistrationContainer,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
})
export class AuthModule { }
