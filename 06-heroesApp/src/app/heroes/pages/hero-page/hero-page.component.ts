import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``,
})
export class HeroPageComponent implements OnInit {
  public hero?: Hero;
  constructor(
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        // delay(3000),
        switchMap(({ id }) => this.heroService.getHeroById(id))
      )
      .subscribe((hero) => {
        if (!hero) return this.router.navigateByUrl('heroes/list');
        this.hero = hero;
        console.log({ hero });

        return;
      });
    // this.heroService.getHeroById();
  }

  goBack(): void {
    this.router.navigateByUrl('heroes/list');
  }
}
