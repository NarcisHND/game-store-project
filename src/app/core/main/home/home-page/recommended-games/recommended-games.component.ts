import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {GamesDataService} from "../../../../../services/games-data.service";
import {RecommendedGameInterfaceModel} from "../../../../../services/interface/recommended-game-interface.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recommended-games',
  templateUrl: './recommended-games.component.html',
  styleUrls: ['./recommended-games.component.scss']
})
export class RecommendedGamesComponent implements OnInit, OnDestroy {
  public gamesData!: RecommendedGameInterfaceModel[];
  public loading = false;
  private subscription!: Subscription;


  constructor(private gamesDataService: GamesDataService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
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
