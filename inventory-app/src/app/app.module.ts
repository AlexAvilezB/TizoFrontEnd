import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductsService } from './services/products.service';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { UpdateProductsComponent } from './components/update-products/update-products.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoriesTableComponent } from './components/categories-table/categories-table.component';
import { AddCategoriesComponent } from './components/add-categories/add-categories.component';
import { UpdateCategoriesComponent } from './components/update-categories/update-categories.component';


const appRoutes: Routes = [
  { path: 'products', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'products/add', component: AddProductsComponent},
  { path: 'products/update/:id', component: UpdateProductsComponent},
  { path: 'categories', component: CategoriesListComponent},
  { path: 'categories/add', component: AddCategoriesComponent},
  { path: 'categories/update/:id', component: UpdateCategoriesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavbarComponent,
    HomePageComponent,
    SideBarComponent,
    ProductsTableComponent,
    AddProductsComponent,
    UpdateProductsComponent,
    CategoriesListComponent,
    CategoriesTableComponent,
    AddCategoriesComponent,
    UpdateCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes) ,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
