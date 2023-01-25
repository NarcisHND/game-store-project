import {Component, OnDestroy, OnInit} from '@angular/core';
import {GamesDataService} from "../../../../../../services/games-data.service";
import {FreeGameModel} from "../../../../../../services/interface/free-game.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-free-games',
  templateUrl: './free-games.component.html',
  styleUrls: ['./free-games.component.scss']
})
export class FreeGamesComponent implements OnInit, OnDestroy {
  public freeRandomGames!: FreeGameModel[];
  private subscription!: Subscription;
  public loading: boolean = false;

  constructor(private gamesDataService: GamesDataService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.subscription = this.gamesDataService.getFreeGames().subscribe({
      next: (res) => {
        this.freeRandomGames = this.gamesDataService.selectFreeRandomGames(4, res);
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
      }
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
