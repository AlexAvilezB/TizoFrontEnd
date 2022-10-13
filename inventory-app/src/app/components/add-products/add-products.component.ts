import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class AddProductsComponent implements OnInit {
  title = '/ Add Products';

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) {}

  products: Product[] = [];

  ngOnInit(): void {}

  saveProduct() {
    let product: Product = {id: this.idInput, product_name: this.nameInput, description: this.descriptionInput, price: this.priceInput, cantity: this.cantityInput};
    this.productsService.addProduct(product)
    .subscribe (product => {
      this.products.push(product);
      this.router.navigate(['/products']);
      alert('Product added successfully');
    })
  }

  idInput: number = 0;
  nameInput: string = '';
  descriptionInput: string = '';
  priceInput: number = 0;
  cantityInput: number = 0;
}
