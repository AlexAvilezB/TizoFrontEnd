import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  title = 404;

  constructor() { }

  ngOnInit(): void {
  }

  //Metodo para retornar a la pagina anterior

  return() {
    window.history.back();
  }

}
