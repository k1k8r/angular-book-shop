import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegistrationContainer } from './containers/registration/registration.container';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registration', component: RegistrationContainer },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
