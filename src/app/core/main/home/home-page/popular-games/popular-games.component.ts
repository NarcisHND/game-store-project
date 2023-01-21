import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameInterfaceModel} from "../../../../../services/interface/game-interface.model";
import {GamesDataService} from "../../../../../services/games-data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-popular-games',
  templateUrl: './popular-games.component.html',
  styleUrls: ['./popular-games.component.scss']
})
export class PopularGamesComponent implements OnInit, OnDestroy {
  public carouselRandomGames: GameInterfaceModel[] = [];
  private subscription!: Subscription;
  public loading: boolean = false;

  constructor(private gamesDataService: GamesDataService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.subscription = this.gamesDataService.getGames().subscribe({
      next: (res) => {
        this.carouselRandomGames = this.gamesDataService.selectAllRandomGames(10, res);
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
