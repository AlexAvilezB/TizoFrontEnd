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
    this.id = this.Route.snapshot.params['id'];

    this.editCategory();
  }

  editCategory() {
    if (this.id !== null) {
      this.categoryService.getCategoryId(this.id).subscribe((data) => {
        this.nameInput = data.category_name;
      });
    }
  }

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

  id: number = 0;
  idInput: number = 0;
  nameInput: string = '';
}
