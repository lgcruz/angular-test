import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CachedStore } from '../interfaces/cache-store.interfaces';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1/';

  public cacheStore: CachedStore = {
    byCountry: {
      term: '',
      countries: [],
    },
    byCapital: {
      term: '',
      countries: [],
    },
    byRegion: {
      region: '',
      countries: [],
    },
  };

  constructor(private http: HttpClient) {}

  searchBy(by: string, term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}${by}/${term}`).pipe(
      catchError((error) => {
        console.log(error);

        return of([]);
      })
      // delay(2000)
    );
  }

  searchByAlphaCode(code: string): Observable<Country | null> {
    const resp = this.searchBy('alpha', code);
    return resp.pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError(() => of(null))
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    return this.searchBy('capital', term);
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.searchBy('name', term);
  }

  searchRegion(region: string): Observable<Country[]> {
    return this.searchBy('region', region);
  }
}
