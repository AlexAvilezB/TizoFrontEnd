import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent implements OnInit {
  users: User[] = [];

  constructor(private router: Router, private userService: UsersService) {}

  ngOnInit(): void {

    //Metodo que obtiene los usuarios -> Invoca a UserService para realizar Get

    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  //Metodo para redirigir a la pagina de edicion de usuarios con el id seleccionado

  updateUsers(users: User) {
    let id = users.id;
    this.router.navigate(['users/update/', id]);
  }

  //Metodo que borra el usuario seleccionado -> Invoca a UserService para realizar Delete

  deleteUser(user: User) {
    this.userService.deleteUser(user).subscribe((data) => {
      this.users = this.users.filter((p) => p.id !== user.id);
      alert('User deleted successfully');
    });
  }
}
