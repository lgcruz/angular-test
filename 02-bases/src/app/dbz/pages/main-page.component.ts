import { ServiceDbz } from './../services/dbz.service';
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: ServiceDbz) {}

  get characters(): Character[] {
    return [...this.dbzService.characterList];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.onDeleteCharacter(id);
  }

  onAddCharacter(character: Character): void {
    this.dbzService.onNewCharacter(character);
  }
}
