import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  collapsed = false;

  //Metodo que cierra el sidebar cuando se hace click en el boton cerrar

  closeSideBar() {
    this.collapsed = !this.collapsed;
  }
}
