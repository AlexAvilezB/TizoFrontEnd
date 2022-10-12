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
  constructor(private productService: ProductsService, private router: Router, private Route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.product = data;
    });

    this.id = this.Route.snapshot.params['id'];
    
  }

  id: number = 0;

  nameInput: string = '';
  descriptionInput: string = '';
  priceInput: number = 0;
  cantityInput: number = 0;
}
