import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  public menubarItems: MenuItem[] = [];

  ngOnInit() {
    this.menubarItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
            items: [{ label: 'Project' }, { label: 'Other' }],
          },
          {
            label: 'Numeros',
            routerLink: 'numbers',
            icon: 'pi pi-dollar',
          },
          {
            label: 'No Comunes',
            routerLink: 'uncommon',
            icon: 'pi pi-globe',
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          { label: 'custom Pipes', routerLink: 'custom', icon: 'pi pi-cog' },
        ],
      },
    ];
  }
}
