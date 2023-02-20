import {Component, OnDestroy, OnInit} from "@angular/core";
import {GamesDataService} from "../../../../../../services/games-data.service";
import {GameModel} from "../../../../../../services/interface/game.model";
import {Subscription} from "rxjs";

@Component({
  selector: "app-games-on-sale",
  templateUrl: "./games-on-sale.component.html",
  styleUrls: ["./games-on-sale.component.scss"]
})
export class GamesOnSaleComponent implements OnInit, OnDestroy {
  public carouselRandomGames: GameModel[] = [];
  public landScapeRandomGames: GameModel[] = [];
  private subscription!: Subscription;
  public loadingCarouselGames = false;
  public loadingLandscapeGames = false;

  constructor(private gamesDataService: GamesDataService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(): void {
    this.loadingCarouselGames = true;
    this.loadingLandscapeGames = true;
    this.subscription = this.gamesDataService.getGames().subscribe({
      next: (res) => {
        this.carouselRandomGames = this.gamesDataService.selectAllRandomGames(10, res);
        this.loadingCarouselGames = false;
      },
      error: (err) => {
        console.error(err);
      }
    });

    this.subscription = this.gamesDataService.getLandscapeGames().subscribe({
      next: (res) => {
        this.landScapeRandomGames = this.gamesDataService.selectAllRandomGames(3, res);
        this.loadingLandscapeGames = false;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
