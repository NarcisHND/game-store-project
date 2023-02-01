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
import {PlaceholderGamePageComponent} from "./placeholders/game-page-placeholder/placeholder-game-page.component";
import {
  BrowserPagePlaceholderComponent
} from './placeholders/browser-page-placeholder/browser-page-placeholder.component';


@NgModule({
  declarations: [
    GameCardComponent,
    CardCarouselComponent,
    CardDetailsComponent,
    GamesTypeCarouselComponent,
    GamesTypeCarouselPlaceholderComponent,
    PlaceholderGamePageComponent,
    BrowserPagePlaceholderComponent
  ],
  exports: [
    GameCardComponent,
    CardCarouselComponent,
    CardDetailsComponent,
    GamesTypeCarouselComponent,
    GamesTypeCarouselPlaceholderComponent,
    PlaceholderGamePageComponent,
    BrowserPagePlaceholderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ServicesModule
  ]
})
export class SharedModule {
}
