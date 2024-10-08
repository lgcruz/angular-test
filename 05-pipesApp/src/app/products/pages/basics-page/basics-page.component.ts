import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameLower: string = 'fernando';
  public nameUpper: string = 'FERNANDO';
  public nameTitle: string = 'FeRnAnDo HerrErA';

  public customDate: Date = new Date();
}
