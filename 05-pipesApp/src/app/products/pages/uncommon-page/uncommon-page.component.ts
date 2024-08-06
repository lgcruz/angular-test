import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  public name: string = 'Luis';
  public gender: 'male' | 'female' = 'male';

  // i18nSelect
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Angelica';
    this.gender = 'female';
  }
  // i18nPlural
  public clients: string[] = ['Luis', 'maria', 'Eduardo', 'Xavier'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClients(): void {
    this.clients.shift();
  }

  // keyValue pipe
  public person = {
    name: 'Luis',
    age: 29,
    address: 'sauces 7',
  };

  // Async pipe
  public myObservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(' Tenemos data en la promesa');
    }, 3500);
  });
}
