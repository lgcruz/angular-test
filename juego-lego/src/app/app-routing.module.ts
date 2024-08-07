import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'juego-lego',
  loadChildren: () =>
    import('./lego/lego.module').then((m) => m.LegoModule),
},
{
  path: '**',
  redirectTo: 'juego-lego',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
