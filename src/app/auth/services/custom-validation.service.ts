import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomValidationService {

  public matchPassword(
    password: string, repeatPassword: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const passwordControl = formGroup.get(password);
      const repeatPasswordControl = formGroup.get(repeatPassword);

      if (!passwordControl || !repeatPasswordControl) {
        return null;
      }

      if (repeatPasswordControl.errors && !repeatPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (repeatPasswordControl.value !== passwordControl.value) {
        repeatPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        repeatPasswordControl.setErrors(null);
      }

      return repeatPasswordControl.errors;
    };
  }

}
