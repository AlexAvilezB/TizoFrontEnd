import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css'],
})
export class UpdateProductsComponent implements OnInit {
  title = '/ Update Product';
  product: Product[] = [];
  constructor(
    private productService: ProductsService,
    private router: Router,
    private Route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.id = this.Route.snapshot.params['id'];

    this.editProduct();
  }

  editProduct() {
    if (this.id !== null) {
      this.productService.getProductId(this.id)
      .subscribe(
        data => {
          this.nameInput = data.product_name;
          this.descriptionInput = data.description;
          this.priceInput = data.price;
          this.cantityInput = data.cantity;
          
        }
      )
    }
  }

  saveChanges() {
    let myProduct = {
      id: this.id,
      product_name: this.nameInput,
      description: this.descriptionInput,
      price: this.priceInput,
      cantity: this.cantityInput,
    }
    this.productService.updateProduct(myProduct).subscribe(data => {
    this.router.navigate(['products']);
  })
}

  id: number = 0;
  idInput: number = 0;
  nameInput: string = '';
  descriptionInput: string = '';
  priceInput: number = 0;
  cantityInput: number = 0;
}
