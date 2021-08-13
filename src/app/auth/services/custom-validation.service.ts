import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomValidationService {

  public matchPassword(comparedControlName: string): ValidatorFn {
    return (passwordControl: AbstractControl): ValidationErrors | null => {
      const comparedControl = passwordControl.parent?.get(comparedControlName);

      if (comparedControl?.value !== passwordControl?.value) {
        return { passwordMismatch: true };
      }

      return null;

    };
  }

}
