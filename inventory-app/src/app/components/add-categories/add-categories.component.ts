import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css'],
})
export class AddCategoriesComponent implements OnInit {
  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) {}

  title = '/ Add Categories';
  category: Category[] = [];

  ngOnInit(): void {}

  saveCategory() {
    let category: Category = {
      id: this.idInput,
      category_name: this.nameInput,
    };
    this.categoryService.addCategory(category).subscribe((category) => {
      this.category.push(category);
      this.router.navigate(['/categories']);
      alert('Category added successfully');
    });
  }

  idInput: number = 0;
  nameInput: string = '';
}
