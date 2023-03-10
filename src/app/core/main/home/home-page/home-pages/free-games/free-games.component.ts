import {Component, OnDestroy, OnInit} from "@angular/core";
import {GamesDataService} from "../../../../../../services/games-data.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {GameModel} from "../../../../../../services/interface/game.model";

@Component({
  selector: "app-free-games",
  templateUrl: "./free-games.component.html",
  styleUrls: ["./free-games.component.scss"]
})
export class FreeGamesComponent implements OnInit, OnDestroy {
  public freeRandomGames!: GameModel[];
  private subscription!: Subscription;
  public loading = false;

  constructor(private gamesDataService: GamesDataService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.subscription = this.gamesDataService.getFreeGames().subscribe({
      next: (res) => {
        this.freeRandomGames = this.gamesDataService.selectAllRandomGames(4, res);
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    })
  }

  selectGame(game: GameModel): void {
    this.router.navigate(["game", game.id, "freeGamesData"], {
      relativeTo: this.route,
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
