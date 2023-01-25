import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {HomePagesComponent} from "./home-page/home-pages/home-pages.component";
import {GamePageComponent} from "./home-page/game-page/game-page.component";


const routes: Routes = [
  {
    path: '', component: HomePageComponent, children: [
      {path: '', component: HomePagesComponent},
      {path: 'game/:id/:section', component: GamePageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
