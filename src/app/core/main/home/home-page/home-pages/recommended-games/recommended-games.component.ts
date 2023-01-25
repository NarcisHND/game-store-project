import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {GamesDataService} from "../../../../../../services/games-data.service";
import {RecommendedGameModel} from "../../../../../../services/interface/recommended-game.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recommended-games',
  templateUrl: './recommended-games.component.html',
  styleUrls: ['./recommended-games.component.scss']
})
export class RecommendedGamesComponent implements OnInit, OnDestroy {
  public gamesData!: RecommendedGameModel[];
  public loading: boolean = false;
  private subscription!: Subscription;


  constructor(private gamesDataService: GamesDataService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.subscription = this.gamesDataService.getRecommendedGames().subscribe({
      next: (res) => {
        this.gamesData = res;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
