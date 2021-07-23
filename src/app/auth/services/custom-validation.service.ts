import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomValidationService {

  public matchPassword(
    password: string, repeatPassword: string): (formGroup: FormGroup) => (null | undefined) {
    // @ts-ignore
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const repeatPasswordControl = formGroup.controls[repeatPassword];

      if (!passwordControl || !repeatPasswordControl) {
        return null;
      }

      if (repeatPasswordControl.errors && !repeatPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (passwordControl.value !== repeatPasswordControl.value) {
        repeatPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        repeatPasswordControl.setErrors(null);
      }
    };
  }

}
