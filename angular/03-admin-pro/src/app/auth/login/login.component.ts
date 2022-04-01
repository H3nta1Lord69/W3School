import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { LoginForm } from 'src/app/interfaces/login-form.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formSubmitted = false;

  public loginform = this.fb.group({
    email: [
      localStorage.getItem('email') || '',
      [Validators.required, Validators.email],
    ],
    password: ['', [Validators.required]],
    remember: [false],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  login() {
    this.formSubmitted = true;

    this.userService.login(this.loginform.value).subscribe(
      (resp) => {
        if (this.loginform.get('remember')?.value) {
          localStorage.setItem('email', this.loginform.get('email')?.value);
        } else {
          localStorage.removeItem('email');
        }
      },
      (err) => {
        Swal.fire('Error', err.error.msg, 'error');
      }
    );
  }
}
