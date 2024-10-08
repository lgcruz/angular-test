import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'She Hulk',
    'Thor',
  ];

  public heroeBorrado: string = '';

  borrarUltimoHeroe(): void {
    this.heroeBorrado = this.heroNames.pop() || '';
  }

  restList(): void {
    this.heroNames = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  }
}
