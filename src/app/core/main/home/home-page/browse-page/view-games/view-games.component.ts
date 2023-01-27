import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {GamesDataService} from "../../../../../../services/games-data.service";
import {GameModel} from "../../../../../../services/interface/game.model";


@Component({
  selector: 'app-view-games',
  templateUrl: './view-games.component.html',
  styleUrls: ['./view-games.component.scss']
})
export class ViewGamesComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  public allGames!: GameModel[];
  public backupGames!: GameModel[];
  public loading: boolean = false;
  public placeholders: {}[] = [{}, {}, {}, {}, {}, {}, {}, {}];

  constructor(private gamesDataService: GamesDataService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.subscription = this.gamesDataService.getGames().subscribe({
      next: (res) => {
        this.allGames = res;
        this.backupGames = res;
        this.loading = false;
      }, error: (err) => {
        console.log(err);
        this.loading = false;
      }
    })
  }

  sortFunction(order: string): void {
    this.allGames = [];
    const sortGames: GameModel[] = this.backupGames.slice();
    if (order === 'all') {
      this.allGames = this.backupGames.slice();
    } else if (order === 'asc') {
      const ascOrder: GameModel[] = sortGames.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
      this.allGames = ascOrder;
    } else if (order === 'desc') {
      const descOrder: GameModel[] = sortGames.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0));
      this.allGames = descOrder;
    } else if (order === 'alphabetical') {
      const alphOrder: GameModel[] = sortGames.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
      this.allGames = alphOrder;
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}


