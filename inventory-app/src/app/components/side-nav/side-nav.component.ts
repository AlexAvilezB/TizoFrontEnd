import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { navbarData } from './nav-data';

interface sideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  constructor(public router: Router) {}

  //evento que cierra el sidenav cuando se llega a determinada medida de pantalla

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
  }

  //se recibe la medida de la pantalla al iniciar la app

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @Output() onToggleSideNav: EventEmitter<sideNavToggle> = new EventEmitter();
  screenWidth = 0;
  collapsed = false;
  navData = navbarData;

  // funcion que cambia el estado del collapsed

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  // funcion que cambia el estado del sidenav

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }
}
