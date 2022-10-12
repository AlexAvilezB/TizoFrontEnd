import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  title = '> Listado de productos';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  irAgregar() {
    this.router.navigate(['/products/add']);
  }

}
