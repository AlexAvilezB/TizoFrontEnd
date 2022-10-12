import { Component, Injectable, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { CategoryService } from '../../services/categories.service';
import { Category } from 'src/app/models/category.model';
import { Router } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css'],
})
export class ProductsTableComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  constructor(private productsService: ProductsService, private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });

    this.categoryService.getCategories().subscribe((data) => {
    this.categories = data;
  });
}

  updateProduct(products: Product) {
    let id = products.id;
    this.router.navigate(['products/update/', id]);
  }

  deleteProduct(product: Product) {
    this.productsService.deleteProduct(product).subscribe(data => {
      this.products = this.products.filter(p => p.id !== product.id);
      alert('Product deleted successfully');
    })
  }


}
