import {Component, OnDestroy, OnInit} from '@angular/core';
import {GamesDataService} from "../../../../../services/games-data.service";
import {GameInterfaceModel} from "../../../../../services/interface/game-interface.model";
import {FreeGameInterfaceModel} from "../../../../../services/interface/free-game-interface.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-top-games',
  templateUrl: './top-games.component.html',
  styleUrls: ['./top-games.component.scss']
})
export class TopGamesComponent implements OnInit, OnDestroy {
  public topSellers!: GameInterfaceModel[];
  public mostPlayed!: GameInterfaceModel[];
  public topUpcoming!: FreeGameInterfaceModel[];
  private subscription!: Subscription;
  public firstLoading: boolean = false;
  public secondLoading: boolean = false;

  constructor(private gameDataService: GamesDataService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
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
        this.topUpcoming = this.gameDataService.selectFreeRandomGames(5, res);
        this.secondLoading = false;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
