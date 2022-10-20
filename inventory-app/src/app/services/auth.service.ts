import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  APIUrl = 'http://localhost:3000';
  token: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    this.http.post(this.APIUrl + '/auth', {email, password})
    .subscribe((data: any) => {
      //this.router.navigate(['products']);
      localStorage.setItem('auth_token', data.token)
      console.log('Soy el contacto del servicio, me pasaste: ', email, password, data.token);
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
}
