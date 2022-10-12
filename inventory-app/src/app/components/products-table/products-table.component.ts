import { Component, Injectable, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { CategoryService } from '../../services/categories.service';
import { Category } from 'src/app/models/category.model';

@Injectable()
@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css'],
})
export class ProductsTableComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  constructor(private productsService: ProductsService, private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });

    this.categoryService.getCategories().subscribe((data) => {
    this.categories = data;
  });
}


}
