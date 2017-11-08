import { Component, OnInit, OnChanges } from '@angular/core';
import { SignUpForm, statesIndia, Addresses } from '../sign-up-form';
import { ReactiveFormsModule, FormControl, FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms'
// import { CheckName } from './validators/check-name'

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  userForm: FormGroup;
  diagnostics: string;
  states: Array<string>;
  users: any = [];
  constructor(private fb: FormBuilder) {
    this.states = statesIndia;
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: '',
      lastName: ['', Validators.required],
      address: this.fb.group({
        state: [this.states[0], Validators.required],
        pinCode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
      })
    });
  }
  ngOnChanges() {
    this.diagnostics = this.userForm.value;
  }
  onSubmit() {
    this.ngOnChanges();
    this.users.push(this.userForm.value);
  }
  resetForm() {
    // this.userForm.setValue({
    //   firstName: '',
    //   middleName: '',
    //   lastName: '',
    //   address: {
    //     state: this.states[0],
    //     pinCode: ''
    //   }
    // });
    this.userForm.reset({
      firstName: '',
      middleName: '',
      lastName: '',
      address: {
        state: this.states[0],
        pinCode: ''
      }
    });
  }
}
