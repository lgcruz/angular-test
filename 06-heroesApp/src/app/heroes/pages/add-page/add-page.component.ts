import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Publisher } from '../../interfaces/hero.interfaces';

interface PublisherOption {
  id: string;
  desc: string;
}

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styles: ``,
})
export class AddPageComponent {
  public heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - comics' },
    { id: 'Marvel Comics', desc: 'Marvel - comics' },
  ];
  public selectedPublisher?: PublisherOption;

  selectPublisher(option: PublisherOption) {
    this.selectedPublisher = option;
  }
}
