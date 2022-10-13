import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  title = '/ users-list';

  constructor(private router:Router) {}

  ngOnInit(): void {}

  //Metodo para redirigir a la pagina de adicion de usuarios

  goToAdd() {
    this.router.navigate(['/users/add']);
  }
}
