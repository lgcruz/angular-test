import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>
      {{ counter }}
    </h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetValue()">reset</button>
    <button (click)="decreaseBy(1)">-1</button>
  `,
})
export class CounterComponent {
  INITIAL_VALUE = 10;
  public counter: number = this.INITIAL_VALUE;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  resetValue(): void {
    this.counter = this.INITIAL_VALUE;
  }

  public decreaseBy(value: number): void {
    this.counter -= value;
  }
}
