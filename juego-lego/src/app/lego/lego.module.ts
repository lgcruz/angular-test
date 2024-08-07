import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { LegoRoutingModule } from './lego-routing.module';
import { SharedModule } from "../shared/shared.module";
import { DetailPageComponent } from './pages/detail-page/detail-page.component';



@NgModule({
  declarations: [
    TablePageComponent,
    DetailPageComponent
  ],
  imports: [
    CommonModule, LegoRoutingModule,
    SharedModule
]
})
export class LegoModule { }
