import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credential } from '../models/credential.model';

@Injectable({
  providedIn: 'root',
})
export class CredentialService {
  constructor(private http: HttpClient) {}

  credentials: Credential[] = [];

  //URL de la API

  APIUrl = 'http://localhost:3000/credentials';

  //Metodos que realizan las llamadas a la API

  addCredential(credential: Credential) {
    return this.http.post<Credential>(this.APIUrl, credential);
  }

  updateCredential(credential: Credential) {
    return this.http.put<Credential>(
      `${this.APIUrl}/${credential.id}`,
      credential
    );
  }
}
