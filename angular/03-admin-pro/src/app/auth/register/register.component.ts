import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public formSubmitted = false;

  public registerForm = this.fb.group(
    {
      name: ['Carls', [Validators.required]],
      email: ['carls@carls.com', [Validators.required, Validators.email]],
      password: ['123qwe', [Validators.required]],
      password2: ['123qwe', [Validators.required]],
      terms: [true, [Validators.required]],
    },
    { validators: this.samePasswords('password', 'password2') }
  );

  constructor(private fb: FormBuilder, private userService: UserService) {}

  createUser() {
    this.formSubmitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    // Create user
    this.userService.createUser(this.registerForm.value).subscribe(
      (response) => {
        console.log('User created!');
        console.log(response);
      },
      (err) => {
        Swal.fire('Error', err.error.msg, 'error');
      }
    );
  }

  fieldInvalid(field: string): boolean {
    if (this.registerForm.get(field)?.invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  passwordValidation() {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if (pass1 !== pass2 && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  acceptTerms() {
    return !this.registerForm.get('terms')?.value && this.formSubmitted;
  }

  samePasswords(pass1: string, pass2: string) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(pass1);
      const pass2Control = formGroup.get(pass2);

      if (pass1Control?.value === pass2Control?.value) {
        pass2Control?.setErrors(null);
      } else {
        pass2Control?.setErrors({ notTheSame: true });
      }
    };
  }
}
