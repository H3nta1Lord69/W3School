import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public registerForm = this.fb.group({
    name: ['Carls', [Validators.required, Validators.minLength(2)]],
    email: ['test100@test.com', [Validators.required]],
    password: ['123456', [Validators.required]],
    password2: ['123456', [Validators.required]],
    terms: [false, [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  createUser() {
    console.log(this.registerForm.value);
  }
}
