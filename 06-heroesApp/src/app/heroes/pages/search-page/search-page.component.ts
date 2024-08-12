import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interfaces';
import { HeroService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``,
})
export class SearchPageComponent {
  public searchInput = new FormControl();
  public heroes: Hero[] = [];

  constructor(private heroesService: HeroService) {}

  searchHero() {
    const value: string = this.searchInput.value || '';
    console.log({ value });
    this.heroesService.getSugestions(value).subscribe((heroes) => {
      this.heroes = heroes;
    });
  }
}
