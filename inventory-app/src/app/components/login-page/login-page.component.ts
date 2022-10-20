import { Component, inject, Injectable, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  emailField = new FormControl('', [Validators.required, Validators.email]);
  passwordField = new FormControl('', [Validators.required]);

  constructor(private router: Router) {}

  Login() {
    const email = this.emailField.value;
    const password = this.passwordField.value;
    //this.router.navigate(['/products']);
  }

  ngOnInit(): void {}
}
