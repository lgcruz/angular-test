import { Component } from '@angular/core';
import { Lego } from '../../interfaces/lego.interface';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrl: './table-page.component.css'
})
export class TablePageComponent {

  public legoSets: Lego[] = [
    {
      name: "The Guardians' Ship",
      item: 76193,
      pieces: 1901,
      ages: 14,
      imgSrc: "https://www.lego.com/cdn/cs/set/assets/blt1e37d38adabc6deb/76193_alt3.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
  detail: "LEGO® Marvel The Guardians' Ship (76193) is perfect for anyone aged 14 and up who is serious about the Marvel Avengers movies, or just loves making cool models."

    },
    {
      name: "The Child",
      item: 75318,
      pieces: 1075,
      ages: 10,
      imgSrc: "https://www.lego.com/cdn/cs/set/assets/blt4077c030eb5d127d/75318.jpg?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
detail: ""
    },
    {
      name: "The Guardians' Ship",
      item: 76193,
      pieces: 1901,
      ages: 14,
      imgSrc: "https://www.lego.com/cdn/cs/set/assets/blt1e37d38adabc6deb/76193_alt3.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
  detail: "LEGO® Marvel The Guardians' Ship (76193) is perfect for anyone aged 14 and up who is serious about the Marvel Avengers movies, or just loves making cool models."

    },
    {
      name: "The Child",
      item: 75318,
      pieces: 1075,
      ages: 10,
      imgSrc: "https://www.lego.com/cdn/cs/set/assets/blt4077c030eb5d127d/75318.jpg?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
detail: ""
    },
    {
      name: "The Guardians' Ship",
      item: 76193,
      pieces: 1901,
      ages: 14,
      imgSrc: "https://www.lego.com/cdn/cs/set/assets/blt1e37d38adabc6deb/76193_alt3.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
  detail: "LEGO® Marvel The Guardians' Ship (76193) is perfect for anyone aged 14 and up who is serious about the Marvel Avengers movies, or just loves making cool models."

    },
    {
      name: "The Child",
      item: 75318,
      pieces: 1075,
      ages: 10,
      imgSrc: "https://www.lego.com/cdn/cs/set/assets/blt4077c030eb5d127d/75318.jpg?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2",
detail: ""
    }
  ];
}
