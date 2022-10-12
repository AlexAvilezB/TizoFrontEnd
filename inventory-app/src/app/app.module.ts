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

const appRoutes: Routes = [
  { path: 'products', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  {path: 'products/add', component: AddProductsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavbarComponent,
    HomePageComponent,
    SideBarComponent,
    ProductsTableComponent,
    AddProductsComponent
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
