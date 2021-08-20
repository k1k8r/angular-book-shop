import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { CustomValidationService } from '../../services/custom-validation.service';
import { IRegistration } from '../../interfaces/registration.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {

  @Output()
  public formSubmit = new EventEmitter<IRegistration>();

  public readonly registrationForm!: FormGroup;

  public get confirmPasswordControl(): AbstractControl {
    return this.registrationForm.controls['confirmPassword'];
  }

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _customValidator: CustomValidationService,
  ) {
    this.registrationForm = this._createForm();
  }

  public submit(): void {
    this.formSubmit.emit(this.registrationForm.value);
  }

  private _createForm(): FormGroup {
    return this._formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, [
        Validators.required,
        this._customValidator.matchPassword('password'),
      ]],
    });
  }

}
