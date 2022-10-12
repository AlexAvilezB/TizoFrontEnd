import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  product: Category[] = [];
    static getCategory: any;

  constructor(private http: HttpClient) {}

  APIUrl = 'http://localhost:3000/categories';

  getCategories() {
    return this.http.get<Category[]>(this.APIUrl);
  }
}
