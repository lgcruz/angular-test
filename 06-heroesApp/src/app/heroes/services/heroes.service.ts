import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interfaces';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HeroService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

}
