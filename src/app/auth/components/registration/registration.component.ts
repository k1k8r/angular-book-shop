import { Component, Output, EventEmitter } from '@angular/core';

import { IRegistration } from '../../interfaces/registration.interface';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {

  @Output()
  public formSubmit = new EventEmitter();

  public formControls: Partial<IRegistration> = {};

  public submit(): void {
    this.formSubmit.emit(this.formControls);
  }

}
