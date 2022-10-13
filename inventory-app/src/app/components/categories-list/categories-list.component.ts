import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
})
export class CategoriesListComponent implements OnInit {
  constructor(private router: Router) {}
  title = '/ Categories List';

  ngOnInit(): void {}

  //Metodo para redirigir a la pagina de adicion de categorias

  goToAdd() {
    this.router.navigate(['/categories/add']);
  }
}
