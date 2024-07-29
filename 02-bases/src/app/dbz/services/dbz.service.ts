import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ServiceDbz {
  public characterList: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 6500 },
  ];

  public onNewCharacter(character: Character): void {
    const newCharacter = {
      id: uuid(),
      ...character,
    };
    this.characterList.push(newCharacter);
  }

  public onDeleteCharacter(id: string): void {
    this.characterList = this.characterList.filter((character) => {
      return character.id?.localeCompare(id) != 0;
    });
  }
}
