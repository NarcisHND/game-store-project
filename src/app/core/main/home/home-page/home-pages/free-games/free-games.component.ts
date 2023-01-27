import {Component, OnDestroy, OnInit} from '@angular/core';
import {GamesDataService} from "../../../../../../services/games-data.service";
import {FreeGameModel} from "../../../../../../services/interface/free-game.model";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-free-games',
  templateUrl: './free-games.component.html',
  styleUrls: ['./free-games.component.scss']
})
export class FreeGamesComponent implements OnInit, OnDestroy {
  public freeRandomGames!: FreeGameModel[];
  private subscription!: Subscription;
  public loading: boolean = false;

  constructor(private gamesDataService: GamesDataService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
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
        console.error(err);
        this.loading = false;
      }
    })
  }

  selectGame(game: FreeGameModel): void {
    this.router.navigate(['game', game.id, 'freeGamesData'], {
      relativeTo: this.route,
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
