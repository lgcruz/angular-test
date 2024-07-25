import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public nameList: Character[] = [{ name: 'Krillin', power: 500 }];
}
