import { Injectable } from '@angular/core';

import { IRegistration } from '../interfaces/registration.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor() { }

  public signUp(formData: IRegistration): void {
    localStorage.setItem(`${formData.username}`, JSON.stringify(formData));
  }

}
