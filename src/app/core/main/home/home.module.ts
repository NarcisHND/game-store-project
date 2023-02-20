import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeRoutingModule} from "./home-routing.module";
import {HomePageComponent} from "./home-page/home-page.component";
import {MatIconModule} from "@angular/material/icon";
import {RecommendedGamesComponent} from "./home-page/home-pages/recommended-games/recommended-games.component";
import {SharedModule} from "../../../shared/shared.module";
import {ServicesModule} from "../../../services/services.module";
import {GamesOnSaleComponent} from "./home-page/home-pages/games-on-sale/games-on-sale.component";
import {GamesDataService} from "../../../services/games-data.service";
import {FreeGamesComponent} from "./home-page/home-pages/free-games/free-games.component";
import {TopGamesComponent} from "./home-page/home-pages/top-games/top-games.component";
import {PopularGamesComponent} from "./home-page/home-pages/popular-games/popular-games.component";
import {LayoutModule} from "../layout/layout.module";
import {HomePagesComponent} from "./home-page/home-pages/home-pages.component";
import {GamePageComponent} from "./home-page/game-page/game-page.component";
import {BrowsePageComponent} from "./home-page/browse-page/browse-page.component";
import {ViewGamesComponent} from "./home-page/browse-page/browse-home-page/view-games/view-games.component";
import {GamesFilterComponent} from "./home-page/browse-page/browse-home-page/games-filter/games-filter.component";
import {BrowseHomePageComponent} from "./home-page/browse-page/browse-home-page/browse-home-page.component";
import {
  TypeGamesPageComponent
} from "./home-page/browse-page/browse-home-page/type-games-page/type-games-page.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {NewsPageComponent} from "./home-page/news-page/news-page.component";
import {GamingNewsMainCardComponent} from "./home-page/news-page/gaming-news-main-card/gaming-news-main-card.component";
import {
  GamingNewsSecondaryCardComponent
} from "./home-page/news-page/gaming-news-secondary-card/gaming-news-secondary-card.component";
import {
  BrowserPagePlaceholderComponent
} from "./home-page/browse-page/browse-home-page/browser-page-placeholder/browser-page-placeholder.component";
import {
  GamePagePlaceholderComponent
} from "./home-page/game-page/game-page-placeholder/game-page-placeholder.component";
import { NewsPagePlaceholderComponent } from "./home-page/news-page/news-page-placeholder/news-page-placeholder.component";

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
    BrowsePageComponent,
    ViewGamesComponent,
    GamesFilterComponent,
    BrowseHomePageComponent,
    BrowserPagePlaceholderComponent,
    TypeGamesPageComponent,
    NewsPageComponent,
    GamingNewsMainCardComponent,
    GamingNewsSecondaryCardComponent,
    GamePagePlaceholderComponent,
    NewsPagePlaceholderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    SharedModule,
    ServicesModule,
    LayoutModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  providers: [
    GamesDataService
  ]
})
export class HomeModule {
}
