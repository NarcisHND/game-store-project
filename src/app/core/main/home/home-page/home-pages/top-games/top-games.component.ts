import {Component, OnDestroy, OnInit} from '@angular/core';
import {GamesDataService} from "../../../../../../services/games-data.service";
import {GameModel} from "../../../../../../services/interface/game.model";
import {FreeGameModel} from "../../../../../../services/interface/free-game.model";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-top-games',
  templateUrl: './top-games.component.html',
  styleUrls: ['./top-games.component.scss']
})
export class TopGamesComponent implements OnInit, OnDestroy {
  public topSellers!: GameModel[];
  public mostPlayed!: GameModel[];
  public topUpcoming!: GameModel[];
  private subscription!: Subscription;
  public firstLoading: boolean = false;
  public secondLoading: boolean = false;

  constructor(private gameDataService: GamesDataService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.firstLoading = true;
    this.secondLoading = true;
    this.subscription = this.gameDataService.getGames().subscribe({
      next: (res) => {
        this.topSellers = this.gameDataService.selectAllRandomGames(5, res);
        this.mostPlayed = this.gameDataService.selectAllRandomGames(5, res);
        this.firstLoading = false;
      },
      error: (err) => {
        console.log(err)
      }
    });

    this.subscription = this.gameDataService.getFreeGames().subscribe({
      next: (res) => {
        this.topUpcoming = this.gameDataService.selectAllRandomGames(5, res);
        this.secondLoading = false;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  selectGameByGamesData(game: GameModel): void {
    this.router.navigate(['game', game.id, 'gamesData'], {
      relativeTo: this.route,
    })
  }

  selectGameByFreeGamesData(game: GameModel): void {
    // this.gameDataService.fetchData().subscribe((res) => console.log(res))
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
