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

    //Metodo que obtiene todos los productos -> Invoca a ProductService para realizar Get

    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });

    //Metodo que obtiene todas las categorias -> Invoca a CategoryService para realizar Get

    this.categoryService.getCategories().subscribe((data) => {
    this.categories = data;
  });
}   

  //Metodo para redirigir a la pagina de edicion de productos con el id seleccionado

  updateProduct(products: Product) {
    let id = products.id;
    this.router.navigate(['products/update/', id]);
  }

  //Metodo que elimina un producto -> Invoca a ProductService para realizar Delete

  deleteProduct(product: Product) {
    this.productsService.deleteProduct(product).subscribe(data => {
      this.products = this.products.filter(p => p.id !== product.id);
      alert('Product deleted successfully');
    })
  }


}
