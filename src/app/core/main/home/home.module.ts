import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from "./home-routing.module";
import { HomePageComponent } from './home-page/home-page.component';
import { MatIconModule } from "@angular/material/icon";
import { RecommendedGamesComponent } from './home-page/home-pages/recommended-games/recommended-games.component';
import { SharedModule } from "../../../shared/shared.module";
import { ServicesModule } from "../../../services/services.module";
import { GamesOnSaleComponent } from './home-page/home-pages/games-on-sale/games-on-sale.component';
import { GamesDataService } from "../../../services/games-data.service";
import { FreeGamesComponent } from './home-page/home-pages/free-games/free-games.component';
import { TopGamesComponent } from './home-page/home-pages/top-games/top-games.component';
import { PopularGamesComponent } from './home-page/home-pages/popular-games/popular-games.component';
import { LayoutModule } from "../layout/layout.module";
import { HomePagesComponent } from './home-page/home-pages/home-pages.component';
import { GamePageComponent } from './home-page/game-page/game-page.component';
import { PlaceholderGamePageComponent } from './home-page/game-page/placeholder-game-page/placeholder-game-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    RecommendedGamesComponent,
    GamesOnSaleComponent,
    FreeGamesComponent,
    TopGamesComponent,
    PopularGamesComponent,
    HomePagesComponent,
    GamePageComponent,
    PlaceholderGamePageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    SharedModule,
    ServicesModule,
    LayoutModule
  ],
  providers: [
    GamesDataService
  ]
})
export class HomeModule {
}
