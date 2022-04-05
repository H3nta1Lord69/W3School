import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

declare const gapi: any;

import { LoginForm } from 'src/app/interfaces/login-form.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formSubmitted = false;
  public auth2: any;

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

  ngOnInit(): void {
    this.renderButton();
  }

  login() {
    this.formSubmitted = true;

    this.userService.login(this.loginform.value).subscribe(
      (resp) => {
        if (this.loginform.get('remember')?.value) {
          localStorage.setItem('email', this.loginform.get('email')?.value);
        } else {
          localStorage.removeItem('email');
        }

        this.router.navigate(['/dashboard']);
      },
      (err) => {
        Swal.fire('Error', err.error.msg, 'error');
      }
    );
  }

  revokeAllScopes() {
    gapi.auth2.getAuthInstance().disconnect();
  }

  renderButton() {
    gapi.signin2.render('my-signin2', {
      scope: 'profile email',
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'dark',
    });

    this.startApp();
  }

  startApp() {
    gapi.load('auth2', () => {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      this.auth2 = gapi.auth2.init({
        client_id:
          '82150336706-cljvf2es2e2kooqj4mgnomle0tt3g7mg.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      });
      this.attachSignin(document.getElementById('my-signin2'));
    });
  }

  attachSignin(element: any) {
    this.auth2.attachClickHandler(
      element,
      {},
      (googleUser: any) => {
        const id_token = googleUser.getAuthResponse().id_token;
        // user signed in
        this.userService
          .loginGoogle(id_token)
          .subscribe((resp) => this.router.navigate(['/dashboard']));

        // TODO: Move to dashboard
      },
      (error: any) => {
        alert(JSON.stringify(error, undefined, 2));
        console.log(error);
      }
    );
  }
}
