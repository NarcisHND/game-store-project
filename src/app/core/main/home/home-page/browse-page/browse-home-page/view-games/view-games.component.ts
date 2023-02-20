import {
  Component,
  Input,
  OnDestroy,
  OnInit,
} from "@angular/core";
import {Subscription} from "rxjs";
import {GameModel} from "../../../../../../../services/interface/game.model";
import {Router} from "@angular/router";

@Component({
  selector: "app-view-games",
  templateUrl: "./view-games.component.html",
  styleUrls: ["./view-games.component.scss"]
})
export class ViewGamesComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  private filterActivation = false;
  private orderData!: string;
  public disableNext = false;
  public disablePrevious = false;
  @Input() public allGames!: GameModel[];
  @Input() public backupGames!: GameModel[];
  @Input() public gamesType!: string | null;
  @Input() public showMessage!: boolean;
  @Input() public allPagesNumber: number[] = [];
  @Input() public page!: number;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    if (this.gamesType) {
      this.filterFunction(this.gamesType);
    }
  }

  sortFunction(order: string): void {
    let sortGames!: GameModel[];
    this.orderData = order;

    if (this.filterActivation) {
      sortGames = this.allGames;
    } else {
      this.allGames = [];
      sortGames = this.backupGames.slice();
    }

    if (order === "all") {
      if (this.gamesType) {
        this.filterFunction(this.gamesType)
      } else {
        this.allGames = this.backupGames.slice();
      }
    } else if (order === "asc") {
      this.allGames = sortGames.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
    } else if (order === "desc") {
      this.allGames = sortGames.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0));
    } else if (order === "alphabetical") {
      this.allGames = sortGames.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    }
  }

  filterFunction(type: string): void {
    this.filterActivation = true;
    this.allGames = [];
    const data = this.backupGames.slice();
    this.allGames = data.filter((game) => game.type === type);

    if (this.orderData !== "all" && this.orderData !== undefined) {
      this.sortFunction(this.orderData);
    }
  }

  selectGame(game: GameModel) {
    this.router.navigate(["home/game", game.id, "gamesData"]).then();
  }

  nextPage(): void {
    window.scroll(0, 0);
    const stopNext = this.allPagesNumber.length;
    const pagesInc = 10;
    this.disablePrevious = false;
    const games = this.backupGames.slice();

    if (this.allPagesNumber.length > 1 && stopNext !== this.page) {
      this.allGames = games.filter((game: GameModel, i: number) => i >= this.page * pagesInc && i < (this.page * pagesInc) + pagesInc);
      this.page++;
      if (stopNext === this.page) {
        this.disableNext = true;
      }
    }
  }

  prevPage(): void {
    window.scroll(0, 0);
    const pagesInc = 10;
    this.disableNext = false;
    const games = this.backupGames.slice();

    if (this.page !== 1) {
      this.page--;
      this.allGames = games.filter((game: GameModel, i: number) => i >= (this.page * pagesInc) - 10 && i < this.page * pagesInc);
      if (this.page === 1) {
        this.disablePrevious = true;
      }
    }
  }

  selectPage(page: number): void {
    window.scroll(0, 0);
    if (this.allPagesNumber.length > 1) {
      const pagesInc = 10;
      this.page = page;
      const games = this.backupGames.slice();

      if (this.page === 1) {
        this.disablePrevious = true;
        this.disableNext = false;
        this.allGames = games.filter((game: GameModel, i: number) => i < pagesInc);
      } else if (this.page === this.allPagesNumber.length) {
        this.disableNext = true;
        this.disablePrevious = false;
        this.allGames = games.filter((game: GameModel, i: number) => i >= (this.page * pagesInc) - pagesInc && i < this.page * pagesInc);
      } else {
        this.disablePrevious = false;
        this.disableNext = false;
        this.allGames = games.filter((game: GameModel, i: number) => i >= (this.page * pagesInc) - pagesInc && i < this.page * pagesInc);
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


