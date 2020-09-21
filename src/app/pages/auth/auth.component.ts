import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {faWindowClose } from '@fortawesome/free-solid-svg-icons';


import * as $ from 'jquery';
import { AuthManager } from '../../core/managers/auth.manager';
import { LocalStorage } from '../../core/helpers/localStorage';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
  faWindowClose = faWindowClose;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  loginForm: FormGroup;
  registerForm: FormGroup;
  arr = [];
//new


  constructor(
    private authManager: AuthManager,
    public localStorage: LocalStorage) {}

  register(e) {
    e.preventDefault();
    const data = {
      name: this.registerForm.value.regname,
      phone: this.registerForm.value.phone,
      email: this.registerForm.value.mail,
      password: this.registerForm.value.passOne,
      type: 'CUSTOMER'
    };
    this.authManager.register(data);
  }


  login(e) {
    e.preventDefault();
    const data = {
      email: this.loginForm.value.mail,
      password: this.loginForm.value.password
    };
    this.authManager.login(data);
  }

  ngOnInit(): void {
    this.initForms();
    $('.toggle-password').click(() => {
      $(this).toggleClass('faEyeSlash');
      const input = $($(this).attr('toggle'));
      if (input.attr('type') === 'password') {
        input.attr('type', 'text');
      } else {
        input.attr('type', 'password');
      }
    });
  }

  initForms() {
    this.loginForm = new FormGroup(
      {
        mail: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]),
        password: new FormControl('', [Validators.required,
        Validators.minLength(6)])
      }
    );
    this.registerForm = new FormGroup(
      {
        regname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
        phone: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15),
          Validators.pattern('^[+]?[0-9]{8,15}$')
        ]),
        mail: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]),
        passOne: new FormControl('', [Validators.required,
        Validators.minLength(6)]),
        confirmpassword: new FormControl('', [Validators.required,
        Validators.minLength(6)])
      }
    );
  }
}
