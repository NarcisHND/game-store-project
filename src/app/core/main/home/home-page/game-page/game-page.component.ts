import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GamesDataService} from "../../../../../services/games-data.service";
import {GameModel} from "../../../../../services/interface/game.model";
import {FreeGameModel} from "../../../../../services/interface/free-game.model";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit, OnDestroy {
  public loading: boolean = false;
  public gameData!: GameModel | FreeGameModel;
  private subscription!: Subscription;

  constructor(private route: ActivatedRoute, private gamesService: GamesDataService) {
  }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.subscription = this.route.paramMap.subscribe({
        next: params => {
          const gameId = Number(params.get('id')) - 1;
          const section = String(params.get('section'));
          if (section === 'gamesData') {
            this.subscription = this.loadGameFromGamesData(gameId).subscribe({
              next: (res) => {
                this.gameData = res;
                this.loading = false;
              }, error: err => {
                console.error(err);
              }
            });
          } else if (section === 'freeGamesData') {
            this.subscription = this.loadGameFromFreeGamesData(gameId).subscribe({
              next: (res) => {
                this.gameData = res;
                this.loading = false;
              }, error: err => {
                console.error(err)
              }
            });
          } else if (section === 'landscapeGamesData') {
            this.subscription = this.gamesService.getGameFromLandscapeGamesData(gameId).subscribe({
              next: (res) => {
                this.gameData = res;
                this.loading = false;
              },
              error: err => {
                console.error(err)
              }
            });
          }
        }, error: err => {
          console.error(err);
        }
      },
    );
  }

  loadGameFromGamesData(id: number): Observable<GameModel> {
    return this.gamesService.getGameFromGamesData(id);
  }

  loadGameFromFreeGamesData(id: number): Observable<FreeGameModel> {
    return this.gamesService.getGameFromFreeGamesData(id);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
