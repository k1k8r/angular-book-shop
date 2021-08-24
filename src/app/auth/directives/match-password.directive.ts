import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';

import { CustomValidationService } from '../services/custom-validation.service';

@Directive({
  selector: '[appMatchPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MatchPasswordDirective, multi: true }],
})
export class MatchPasswordDirective implements Validator {

  @Input('appMatchPassword') public MatchPassword: string[] = [];

  constructor(private customValidator: CustomValidationService) { }

  public validate(formGroup: FormGroup): ValidationErrors | null {
    return this.customValidator.matchPassword(
      this.MatchPassword[0],
    )(formGroup);
  }

}
