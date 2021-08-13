import { Component } from '@angular/core';

import { IRegistration } from '../../interfaces/registration.interface';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration-container',
  templateUrl: './registration.container.html',
})

export class RegistrationContainer {

  constructor(private readonly _authService: AuthService) { }

  public submit(formData: IRegistration): void {
    this._authService.signUp(formData);
  }

}
