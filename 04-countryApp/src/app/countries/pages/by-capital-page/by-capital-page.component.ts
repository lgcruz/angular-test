import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent {
  public isLoading: boolean = false;
  public countries: Country[] = [];
  constructor(private countriesService: CountriesService) {}
  searchByCapital(param: string): void {
    this.isLoading = true;
    this.countriesService.searchCapital(param).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
