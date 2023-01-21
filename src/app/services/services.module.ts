import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {NextDirective} from "./directive/game-card-carousel/next.directive";
import {PrevDirective} from "./directive/game-card-carousel/prev.directive";
import {HoverGameCardDirective} from './directive/hover-game-card.directive';
import {RecGamesCarouselDirective} from './directive/recommended-games-carousel/rec-games-carousel.directive';
import {
  SelectGameHtmlElementDirective
} from './directive/recommended-games-carousel/select-game-html-element.directive';
import {HoverCarouselDirective} from './directive/recommended-games-carousel/hover-carousel.directive';
import {ScrollUpDirective} from './directive/scroll-up.directive';

@NgModule({
  declarations: [
    NextDirective,
    PrevDirective,
    HoverGameCardDirective,
    RecGamesCarouselDirective,
    SelectGameHtmlElementDirective,
    HoverCarouselDirective,
    ScrollUpDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    NextDirective,
    PrevDirective,
    HoverGameCardDirective,
    RecGamesCarouselDirective,
    SelectGameHtmlElementDirective,
    HoverCarouselDirective,
    ScrollUpDirective,
  ]
})
export class ServicesModule {
}
