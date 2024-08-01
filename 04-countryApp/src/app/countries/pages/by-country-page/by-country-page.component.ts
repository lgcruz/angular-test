import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css',
})
export class ByCountryPageComponent {
  public isLoading: boolean = false;
  public countries: Country[] = [];
  constructor(private countriesService: CountriesService) {}
  searchByCountry(param: string): void {
    this.isLoading = true;
    this.countriesService.searchCountry(param).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
