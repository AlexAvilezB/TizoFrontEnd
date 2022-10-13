import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-update-categories',
  templateUrl: './update-categories.component.html',
  styleUrls: ['./update-categories.component.css'],
})
export class UpdateCategoriesComponent implements OnInit {
  title = '/ Update Category';
  category: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private Route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    //Metodo que obtiene el id de la categoria en la url mediante snapshot

    this.id = this.Route.snapshot.params['id'];

    //Llamada a editCategory

    this.editCategory();
  }

  //Declaracion de metodo editCategory encargado de validar si el id es diferente de null, en caso de no serlo invoca
  //a getCategoryId para obtener la categoria con el id seleccionado

  editCategory() {
    if (this.id !== null) {
      this.categoryService.getCategoryId(this.id).subscribe((data) => {
        this.nameInput = data.category_name;
      });
    }
  }

  //Metodo que guarda los cambios realizados en la categoria -> Invoca a CategoryService para realizar Put

  saveChanges() {
    let myCategory = {
      id: this.id,
      category_name: this.nameInput,
    };
    this.categoryService.updateCategory(myCategory).subscribe((data) => {
      alert('Category updated successfully');
      this.router.navigate(['categories']);
    });
  }

  //Variables que guardan los datos de los inputs

  id: number = 0;
  idInput: number = 0;
  nameInput: string = '';
}
