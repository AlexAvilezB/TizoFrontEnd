import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  styleUrls: ['./categories-table.component.css'],
})
export class CategoriesTableComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {

    //Metodo que obtiene todas las categorias -> Invoca a CategoryService para realizar Get

    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  //Metodo para redirigir a la pagina de edicion de categorias con el id seleccionado

  updateCategory(categories: Category) {
    let id = categories.id;
    this.router.navigate(['categories/update/', id]);
  }

  //Metodo que borra la categoria seleccionada -> Invoca a CategoryService para realizar Delete

  deleteCategory(category: Category) {
    this.categoryService.deleteCategory(category).subscribe((data) => {
      this.categories = this.categories.filter((p) => p.id !== category.id);
      alert('Product deleted successfully');
    });
  }
}
