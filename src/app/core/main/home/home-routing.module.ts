import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {HomePagesComponent} from "./home-page/home-pages/home-pages.component";
import {GamePageComponent} from "./home-page/game-page/game-page.component";
import {BrowsePageComponent} from "./home-page/browse-page/browse-page.component";
import {BrowseHomePageComponent} from "./home-page/browse-page/browse-home-page/browse-home-page.component";
import {
  TypeGamesPageComponent
} from "./home-page/browse-page/browse-home-page/type-games-page/type-games-page.component";


const routes: Routes = [
  {
    path: '', component: HomePageComponent, children: [
      {path: '', component: HomePagesComponent},
      {path: 'game/:id/:section', component: GamePageComponent},
      {
        path: 'browse', component: BrowsePageComponent, children: [
          {path: '', component: BrowseHomePageComponent},
          {path: 'games/:type', component: TypeGamesPageComponent}
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
