import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  product: Product[] = [];

  constructor(private http: HttpClient) {}

  APIUrl = 'http://localhost:3000/products';

  getProducts() {
    return this.http.get<Product[]>(this.APIUrl);
  }

  
}
