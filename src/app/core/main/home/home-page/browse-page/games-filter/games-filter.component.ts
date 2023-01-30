import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {GamesDataService} from "../../../../../../services/games-data.service";
import {GameModel} from "../../../../../../services/interface/game.model";

@Component({
  selector: 'app-games-filter',
  templateUrl: './games-filter.component.html',
  styleUrls: ['./games-filter.component.scss']
})
export class GamesFilterComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  public data!: GameModel[];
  public value!: string;

  constructor(private gamesDataService: GamesDataService) {
  }

  ngOnInit(): void {
    this.loadData();

  }

  loadData(): void {
    this.subscription = this.gamesDataService.getGames().subscribe({
      next: (res) => {
        this.data = res;
      }, error: (err) => {
        console.error(err);
      }
    })
  }

  searchGame() {
    console.log(this.value);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
