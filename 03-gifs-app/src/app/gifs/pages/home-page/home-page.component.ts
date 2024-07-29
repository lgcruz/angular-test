import { GifsService } from './../../services/gifs.service';
import { Component } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  constructor(private gifsService: GifsService) {}
  getGifs(): Gif[] {
    return this.gifsService.gifsList;
  }
}
