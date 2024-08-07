import { Component, Input } from '@angular/core';
import { Lego } from '../../../lego/interfaces/lego.interface';

@Component({
  selector: 'shared-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  public legoSet!: Lego;



}
