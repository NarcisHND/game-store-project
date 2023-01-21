import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from "./home-routing.module";
import {HomePageComponent} from './home-page/home-page.component';
import {MatIconModule} from "@angular/material/icon";
import {RecommendedGamesComponent} from './home-page/recommended-games/recommended-games.component';
import {SharedModule} from "../../../shared/shared.module";
import {ServicesModule} from "../../../services/services.module";
import {GamesOnSaleComponent} from './home-page/games-on-sale/games-on-sale.component';
import {GamesDataService} from "../../../services/games-data.service";
import {FreeGamesComponent} from './home-page/free-games/free-games.component';
import {TopGamesComponent} from './home-page/top-games/top-games.component';
import {PopularGamesComponent} from './home-page/popular-games/popular-games.component';
import {LayoutModule} from "../layout/layout.module";

@NgModule({
  declarations: [
    HomePageComponent,
    RecommendedGamesComponent,
    GamesOnSaleComponent,
    FreeGamesComponent,
    TopGamesComponent,
    PopularGamesComponent,
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
