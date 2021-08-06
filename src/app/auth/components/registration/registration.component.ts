import { OnInit, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CustomValidationService } from '../../services/custom-validation.service';
import { IRegistration } from '../../interfaces/registration.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  @Output()
  public formSubmit = new EventEmitter<IRegistration>();

  public readonly registrationForm!: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _customValidator: CustomValidationService,
  ) {
    this.registrationForm = this._createForm();
  }

  public ngOnInit(): void {
    this._createForm();
  }

  public submit(): void {
    this.formSubmit.emit(this.registrationForm.value);
  }

  private _createForm(): FormGroup {
    return this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, this._customValidator.matchPassword('password')]],
    });
  }

}
