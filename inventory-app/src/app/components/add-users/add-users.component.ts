import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { FormControl, Validators } from '@angular/forms';
import { Credential } from 'src/app/models/credential.model';
import { CredentialService } from 'src/app/services/credential.service';

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
  passField = new FormControl('', [Validators.required]);
  birthField = new FormControl('', [Validators.required]);
  positionField = new FormControl('', [Validators.required]);
  roleField = new FormControl('', [Validators.required]);

  constructor(
    private router: Router,
    private userService: UsersService,
    private credentialService: CredentialService
  ) {}

  users: User[] = [];
  credentials: Credential[] = [];

  ngOnInit(): void {}

  //Metodo que guarda el usuario nuevo (las credenciales tambien se respaldan en un array propio, para uso posterior del login) -> Invoca a UserService para realizar Post

  saveUser() {
    let user: User = {
      id: this.idInput,
      username: this.nameInput,
      lastname: this.lastnameInput,
      email: this.emailInput,
      password: this.passwordInput,
      birthday: this.birthInput,
      role: this.roleInput,
      position: this.positionInput,
    };

    this.userService.addUser(user).subscribe((user) => {
      this.users.push(user);
      this.router.navigate(['/users']);
      alert('User added successfully');
    });

    let credential: Credential = {
      id: this.idInput,
      email: this.emailInput,
      password: this.passwordInput,
    };

    this.credentialService.addCredential(credential).subscribe((credential) => {
      this.credentials.push(credential);
    });
  }

  //Variables que guardan los datos de los inputs

  idInput: number = 0;
  nameInput: string = '';
  lastnameInput: string = '';
  emailInput: string = '';
  passwordInput: string = '';
  birthInput: string = '';
  roleInput: string = '';
  positionInput: string = '';
}
