import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css'],
})
export class UpdateUsersComponent implements OnInit {
  title = '/ Update User';
  user: User[] = [];

  nameField = new FormControl('', [Validators.required]);
  lastnameField = new FormControl('', [Validators.required]);
  emailField = new FormControl('', [Validators.required, Validators.email]);
  birthField = new FormControl('', [Validators.required]);
  positionField = new FormControl('', [Validators.required]);
  roleField = new FormControl('', [Validators.required]);

  constructor(
    private userService: UsersService,
    private router: Router,
    private Route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //Obtencion del id del usuario a editar mediante snapshot

    this.id = this.Route.snapshot.params['id'];

    //Llamado al metodo que obtiene el usuario por id

    this.editUser();
  }

  //Metodo que llena los inputs con los datos del usuario seleccionado

  editUser() {
    if (this.id !== null) {
      this.userService.getUserId(this.id).subscribe((data) => {
        this.nameInput = data.username;
        this.lastnameInput = data.lastname;
        this.emailInput = data.email;
        this.birthInput = data.birthday;
        this.roleInput = data.role;
        this.positionInput = data.position;
      });
    }
  }

  //Metodo que guarda los cambios realizados al usuario -> Invoca a UserService para realizar el put

  saveChanges() {
    let myUser = {
      id: this.id,
      username: this.nameInput,
      lastname: this.lastnameInput,
      email: this.emailInput,
      birthday: this.birthInput,
      role: this.roleInput,
      position: this.positionInput,
    };
    this.userService.updateUser(myUser).subscribe((data) => {
      alert('User updated successfully');
      this.router.navigate(['users']);
    });
  }

  //Declaracion de variables que se llenaran con los datos del usuario seleccionado

  id: number = 0;
  idInput: number = 0;
  nameInput: string = '';
  lastnameInput: string = '';
  emailInput: string = '';
  birthInput: string = '';
  roleInput: string = '';
  positionInput: string = '';
}
