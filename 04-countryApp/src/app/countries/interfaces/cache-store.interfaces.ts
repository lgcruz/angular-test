import { Country } from './country.interface';
import { Regions } from './regions.interface';

export interface CachedStore {
  byCapital: TermCountry;
  byCountry: TermCountry;
  byRegion: TermRegion;
}

// export interface TermCapital {
//   term: string;
//   countries: Country[];
// }

export interface TermCountry {
  term: string;
  countries: Country[];
}

export interface TermRegion {
  region: Regions;
  countries: Country[];
}
