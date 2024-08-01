import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Subscription, switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css',
})
export class CountryPageComponent implements OnInit, OnDestroy {
  public country?: Country;
  private codeSubscription?: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.codeSubscription = this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.countriesService.searchByAlphaCode(id)))
      .subscribe((country) => {
        if (!country) {
          return this.router.navigateByUrl('');
        }
        console.log(country);

        return (this.country = country);
      });
  }
  ngOnDestroy(): void {
    this.codeSubscription?.unsubscribe();
  }
}
