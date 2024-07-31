import { Component } from '@angular/core';
import { Routes } from '../../interfaces/Routes.interface';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  public routeList: Routes[] = [
    // { path: '', title: 'home' },
    // { path: 'about', title: 'about' },
    // { path: 'contact', title: 'contact' },
    { path: 'countries/by-capital', title: 'Por Capital' },
    { path: 'countries/by-country', title: 'Por Pais' },
    { path: 'countries/by-region', title: 'Por Region' },
  ];
}
