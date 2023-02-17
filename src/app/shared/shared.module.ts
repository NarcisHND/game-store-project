import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameCardComponent} from './game-card/game-card.component';
import {MatIconModule} from "@angular/material/icon";
import {ServicesModule} from "../services/services.module";
import {CardCarouselComponent} from './card-carousel/card-carousel.component';
import {CardDetailsComponent} from './card-details/card-details.component';
import {GamesTypeCarouselComponent} from './games-type-carousel/games-type-carousel.component';
import {
  GamesTypeCarouselPlaceholderComponent
} from './games-type-carousel/games-type-carousel-placeholder/games-type-carousel-placeholder.component';
import {PaginationComponent} from './pagination/pagination.component';

@NgModule({
  declarations: [
    GameCardComponent,
    CardCarouselComponent,
    CardDetailsComponent,
    GamesTypeCarouselComponent,
    GamesTypeCarouselPlaceholderComponent,
    PaginationComponent,
  ],
  exports: [
    GameCardComponent,
    CardCarouselComponent,
    CardDetailsComponent,
    GamesTypeCarouselComponent,
    GamesTypeCarouselPlaceholderComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ServicesModule
  ]
})
export class SharedModule {
}
