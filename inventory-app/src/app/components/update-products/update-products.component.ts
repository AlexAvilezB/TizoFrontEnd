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
  product: Product[] = [];        //inicializacion de la clase
  constructor(
    private productService: ProductsService,
    private router: Router,
    private Route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    //Metodo que obtiene el id del producto seleccionado mediante snapshot

    this.id = this.Route.snapshot.params['id'];

    //Llamado al metodo que obtiene el producto por id

    this.editProduct();
  }

  // declaracion de metodo que llena los inputs con los datos del producto seleccionado

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

  //Metodo que guarda los cambios realizados al producto -> Invoca a ProductService para realizar el put

  saveChanges() {
    let myProduct = {
      id: this.id,
      product_name: this.nameInput,
      description: this.descriptionInput,
      price: this.priceInput,
      cantity: this.cantityInput,
    }
    this.productService.updateProduct(myProduct).subscribe(data => {
    alert('Product updated successfully');
    this.router.navigate(['products']);
  })
}

  //Variables que guardan los datos de los inputs

  id: number = 0;
  idInput: number = 0;
  nameInput: string = '';
  descriptionInput: string = '';
  priceInput: number = 0;
  cantityInput: number = 0;
}
