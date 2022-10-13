import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class AddProductsComponent implements OnInit {
  title = '/ Add Products';

  nameField = new FormControl('', [Validators.required]);
  descriptionField = new FormControl('', [Validators.required]);
  priceField = new FormControl('', [Validators.required, Validators.min(1)]);
  cantityField = new FormControl('', [Validators.required]);

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) {}

  products: Product[] = [];

  ngOnInit(): void {}

  //Metodo para guardar al nuevo producto -> Invoca a ProductService

  saveProduct() {
    let product: Product = {
      id: this.idInput,
      product_name: this.nameInput,
      description: this.descriptionInput,
      price: this.priceInput,
      cantity: this.cantityInput,
    };
    this.productsService.addProduct(product).subscribe((product) => {
      this.products.push(product);
      this.router.navigate(['/products']);
      alert('Product added successfully');
    });
  }

  //Variables que guardan los datos de los inputs

  idInput: number = 0;
  nameInput: string = '';
  descriptionInput: string = '';
  priceInput: number = 0;
  cantityInput: number = 0;
}
