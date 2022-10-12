import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  products: Product[] = [];

  APIUrl = 'http://localhost:3000/products';

  getProducts() {
    return this.http.get<Product[]>(this.APIUrl);
  }

  addProduct(product: Product) {
    return this.http.post<Product>(this.APIUrl, product);
  }

  getProductbyId(id: number) {
    let selectedProduct = this.products[id];
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(`${this.APIUrl}/${product.id}`, product);
  }

  deleteProduct(product: Product) {
    return this.http.delete<Product>(`${this.APIUrl}/${product.id}`);
  }

  
}
