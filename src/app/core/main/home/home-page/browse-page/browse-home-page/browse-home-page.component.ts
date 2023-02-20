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
  public page!: number;
  private backupGames!: GameModel[];
  private sortOrderType!: string;
  private gamesInCallOrders!: GameModel[];

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
    this.backupGames = games;
    this.gamesInCallOrders = games;
    this.message = games.length === 0;

    if (this.sortOrderType) {
      this.filteredData = games
      this.sortFunction(this.sortOrderType);
    } else {
      this.filteredData = games
    }

    this.getPagesNumber(games);
    this.cd.detectChanges();
  }

  getPagesNumber(games: GameModel[]): void {
    this.page = 1;
    let pageCount = 0;
    this.allPagesNumber = [];
    this.disablePrevious = true;
    if (games.length > 12 && games.length !== 0) {
      this.pagesIncrement = 12;
      this.disableNext = false;
    } else {
      this.pagesIncrement = games.length;
      this.allPagesNumber.push(1);
      this.disableNext = true;
    }
    games.forEach((game: GameModel, i: number): void => {
      if (i === this.pagesIncrement && this.pagesIncrement >= 12) {
        pageCount++;
        this.allPagesNumber.push(pageCount);
        this.pagesIncrement = this.pagesIncrement + 12;

      } else if (i != this.pagesIncrement && i > this.allPagesNumber.length * 12) {
        pageCount++;
        this.allPagesNumber.push(pageCount);
      }
    })
  }

  sortFunction(order: string): void {
    const sortGames = this.gamesInCallOrders.slice();
    this.sortOrderType = order;
    this.page = 1;

    if (order === "all") {
      this.filteredData = this.gamesInCallOrders;
    } else if (order === "asc") {
      this.filteredData = sortGames.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
    } else if (order === "desc") {
      this.filteredData = sortGames.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0));
    } else if (order === "alphabetical") {
      this.filteredData = sortGames.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    }

    this.backupGames = this.filteredData;
  }

  nextPage(): void {
    window.scroll(0, 0);
    const stopNext = this.allPagesNumber.length;
    const pagesInc = 12;
    this.disablePrevious = false;
    const games = this.backupGames;

    if (this.allPagesNumber.length > 1 && stopNext !== this.page) {
      this.filteredData = games.filter((game: GameModel, i: number) => i >= this.page * pagesInc && i < (this.page * pagesInc) + pagesInc);
      this.page++;
      if (stopNext === this.page) {
        this.disableNext = true;
      }
    }
  }

  prevPage(): void {
    window.scroll(0, 0);
    const pagesInc = 12;
    this.disableNext = false;
    const games = this.backupGames;

    if (this.page !== 1) {
      this.page--;
      this.filteredData = games.filter((game: GameModel, i: number) => i >= (this.page * pagesInc) - 12 && i < this.page * pagesInc);
      if (this.page === 1) {
        this.disablePrevious = true;
      }
    }
  }

  selectPage(page: number): void {
    window.scroll(0, 0);
    if (this.allPagesNumber.length > 1) {
      const pagesInc = 12;
      this.page = page;
      const games = this.backupGames;

      if (this.page === 1) {
        this.disablePrevious = true;
        this.disableNext = false;
        this.filteredData = games.filter((game: GameModel, i: number) => i < pagesInc);
      } else if (this.page === this.allPagesNumber.length) {
        this.disableNext = true;
        this.disablePrevious = false;
        this.filteredData = games.filter((game: GameModel, i: number) => i >= (this.page * pagesInc) - pagesInc && i < this.page * pagesInc);
      } else {
        this.disablePrevious = false;
        this.disableNext = false;
        this.filteredData = games.filter((game: GameModel, i: number) => i >= (this.page * pagesInc) - pagesInc && i < this.page * pagesInc);
      }
    } else {
      this.page = page;
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
