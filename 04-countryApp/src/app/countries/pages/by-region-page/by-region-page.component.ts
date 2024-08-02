import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Regions } from '../../interfaces/regions.interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent implements OnInit {
  public isLoading: boolean = false;
  public countries: Country[] = [];
  public regions: Regions[] = [
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public selectedRegion?: Regions;
  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    // this.searchByRegion = this.countriesService.cacheStore.byRegion.region;
  }
  searchByRegion(param: Regions): void {
    this.selectedRegion = param;
    this.isLoading = true;
    this.countriesService.searchRegion(param).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
