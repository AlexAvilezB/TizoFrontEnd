import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  emailField = new FormControl('', [Validators.required, Validators.email]);
  passwordField = new FormControl('', [Validators.required]);

  constructor(private router:Router) {}

  ngOnInit(): void {}

  goToProducts() {
    this.router.navigate(['/products']);
  }
}
