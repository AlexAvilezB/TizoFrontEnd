import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css'],
})
export class AddUsersComponent implements OnInit {
  title = '/ Add Users';

  nameField = new FormControl('', [Validators.required]);
  lastnameField = new FormControl('', [Validators.required]);
  emailField = new FormControl('', [Validators.required, Validators.email]);
  birthField = new FormControl('', [Validators.required]);
  positionField = new FormControl('', [Validators.required]);
  roleField = new FormControl('', [Validators.required]);

  constructor(private router: Router, private userService: UsersService) {}

  users: User[] = [];

  ngOnInit(): void {}

  //Metodo que guarda el usuario nuevo -> Invoca a UserService para realizar Post

  saveUser() {
    let user: User = {
      id: this.idInput,
      username: this.nameInput,
      lastname: this.lastnameInput,
      email: this.emailInput,
      birthday: this.birthInput,
      role: this.roleInput,
      position: this.positionInput,
    };
    this.userService.addUser(user).subscribe((user) => {
      this.users.push(user);
      this.router.navigate(['/users']);
      alert('User added successfully');
    });
  }

  //Variables que guardan los datos de los inputs

  idInput: number = 0;
  nameInput: string = '';
  lastnameInput: string = '';
  emailInput: string = '';
  birthInput: string = '';
  roleInput: string = '';
  positionInput: string = '';
}
