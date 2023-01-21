import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameCardComponent} from './game-card/game-card.component';
import {MatIconModule} from "@angular/material/icon";
import {ServicesModule} from "../services/services.module";
import {CardCarouselComponent} from './card-carousel/card-carousel.component';
import {CardDetailsComponent} from './card-details/card-details.component';


@NgModule({
  declarations: [
    GameCardComponent,
    CardCarouselComponent,
    CardDetailsComponent
  ],
  exports: [
    GameCardComponent,
    CardCarouselComponent,
    CardDetailsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ServicesModule
  ]
})
export class SharedModule {
}
