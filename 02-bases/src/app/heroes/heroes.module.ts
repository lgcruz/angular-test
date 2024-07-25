import { NgModule } from '@angular/core';
import { HeroComponent } from './Components/hero/hero.component';
import { ListComponent } from './Components/list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeroComponent, ListComponent],
  exports: [HeroComponent, ListComponent],
  imports: [CommonModule],
})
export class HeroesModule {}
