import {ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {GamesTypeCardModel} from "../../../../../../services/interface/gamesTypeCard-model";
import {Subscription} from "rxjs";
import {GamesDataService} from "../../../../../../services/games-data.service";
import {GameModel} from "../../../../../../services/interface/game.model";

@Component({
  selector: "app-browse-home-page",
  templateUrl: "./browse-home-page.component.html",
  styleUrls: ["./browse-home-page.component.scss"]
})
export class BrowseHomePageComponent implements OnInit, OnDestroy {
  public cardsData!: GamesTypeCardModel[];
  public gamesData!: GameModel[];
  public filteredData!: GameModel[];
  private subscription!: Subscription;
  public loadingCards = false;
  public loadingGames = false;
  public message = false;
  public allPagesNumber: number[] = [];
  private pagesIncrement!: number;
  public disableNext = false;
  public disablePrevious = false;
  public startPage!: number;

  constructor(private gamesDataService: GamesDataService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.loadData();
    window.scroll(0, 0);
  }

  loadData(): void {
    this.loadingCards = true;
    this.loadingGames = true;

    this.subscription = this.gamesDataService.getGamesTypesCard().subscribe({
      next: (res) => {
        this.cardsData = res;
        this.loadingCards = false;
      },
      error: (err) => {
        console.error(err);
        this.loadingCards = false;
      }
    });

    this.subscription = this.gamesDataService.getGames().subscribe({
      next: (res) => {
        this.subscription = this.gamesDataService.getFreeGames().subscribe({
          next: (freeGames) => {
            const selectFreeGames = freeGames.filter(game => game.price === "free");
            this.gamesData = res.concat(selectFreeGames);
            this.loadingGames = false;
          },
          error: (err) => {
            console.error(err);
            this.loadingGames = false;
          }
        })
      },
      error: (err) => {
        console.error(err);
        this.loadingGames = false;
      }
    });
  }

  getFilteredData(games: GameModel[]): void {
    this.filteredData = games;
    this.message = this.filteredData.length === 0;
    this.getPagesNumber(games);
    this.cd.detectChanges();
  }

  getPagesNumber(games: GameModel[]): void {
    this.startPage = 1;
    let pageCount = 0;
    this.allPagesNumber = [];
    this.disablePrevious = true;
    if (games.length > 10 && games.length !== 0) {
      this.pagesIncrement = 10;
    } else {
      this.pagesIncrement = games.length;
      this.allPagesNumber.push(1);
      this.disableNext = true;
    }
    games.forEach((game: GameModel, i: number): void => {
      if (i == this.pagesIncrement && this.pagesIncrement >= 10) {
        pageCount++;
        this.allPagesNumber.push(pageCount);
        this.pagesIncrement = this.pagesIncrement + 10;

      } else if (i != this.pagesIncrement && i > this.allPagesNumber.length * 10) {
        pageCount++;
        this.allPagesNumber.push(pageCount);
      }
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
