import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  users: User[] = [];

  //URL de la API

  APIUrl = 'http://localhost:3000/users';

  //Metodos que realizan las llamadas a la API

  getUsers() {
    return this.http.get<User[]>(this.APIUrl);
  }

  addUser(user: User) {
    return this.http.post<User>(this.APIUrl, user);
  }

  getUserId(id: number) {
    return this.http.get<User>(`${this.APIUrl}/${id}`);
  }

  updateUser(user: User) {
    return this.http.put<User>(`${this.APIUrl}/${user.id}`, user);
  }

  deleteUser(user: User) {
    return this.http.delete<User>(`${this.APIUrl}/${user.id}`);
  }
}
