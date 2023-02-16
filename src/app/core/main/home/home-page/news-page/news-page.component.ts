import {Component, OnInit, OnDestroy} from '@angular/core';
import {GamesDataService} from "../../../../../services/games-data.service";
import {GamingNewsCardModel} from "../../../../../services/interface/gaming-news-card.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit, OnDestroy {
  public gamingNewsCards!: GamingNewsCardModel[];
  private allCards!: GamingNewsCardModel[];
  public gamingNewsMainCards!: GamingNewsCardModel[];
  public loading: boolean = false;
  private subscription!: Subscription;
  public allPagesNumber: number[] = [];
  private pagesIncrement!: number;
  public page!: number;
  public disableNext = false;
  public disablePrevious = false;

  constructor(private gamesDataService: GamesDataService) {
  }

  ngOnInit() {
    this.loadData();
    window.scroll(0, 0,);
  }

  loadData(): void {
    this.loading = true;
    this.subscription = this.gamesDataService.getNewGamingNews().subscribe({
      next: (res: GamingNewsCardModel[]) => {
        this.allCards = res.filter((card, i) => i >= 2);
        this.page = 1;

        this.getPagesNumber();
        this.gamingNewsCards = this.allCards.slice().filter((card, i) => i < 10);
        this.gamingNewsMainCards = res.filter((card, i) => i < 2);

        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  getPagesNumber(): void {
    let pageCount: number = 0;
    this.disablePrevious = true;

    if (this.allCards.length > 10) {
      this.pagesIncrement = 10;
    } else {
      this.pagesIncrement = this.allCards.length;
      this.allPagesNumber.push(1);
      this.disableNext = true;
    }

    this.allCards.forEach((card, i): void => {
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

  nextPage(): void {
    window.scroll(0, 0);
    let stopNext: number = this.allPagesNumber.length;
    let pagesInc: number = 10;
    this.disablePrevious = false;
    let cards = this.allCards.slice();

    if (this.allPagesNumber.length > 1 && stopNext !== this.page) {
      this.gamingNewsCards = cards.filter((card, i) => i >= this.page * pagesInc && i < (this.page * pagesInc) + pagesInc);
      this.page++;
      if (stopNext === this.page) {
        this.disableNext = true;
      }
    }
  }

  prevPage(): void {
    window.scroll(0, 0);
    let pagesInc: number = 10;
    this.disableNext = false;
    let cards: GamingNewsCardModel[] = this.allCards.slice();

    if (this.page !== 1) {
      this.page--;
      this.gamingNewsCards = cards.filter((card, i) => i >= (this.page * pagesInc) - 10 && i < this.page * pagesInc);
      if (this.page === 1) {
        this.disablePrevious = true;
      }
    }
  }

  selectPage(page: number): void {
    window.scroll(0, 0);
    if (this.allPagesNumber.length > 1) {
      let pagesInc: number = 10;
      this.page = page;
      let cards: GamingNewsCardModel[] = this.allCards.slice();

      if (this.page === 1) {
        this.disablePrevious = true;
        this.disableNext = false;
        this.gamingNewsCards = cards.filter((card, i) => i < pagesInc);
      } else if (this.page === this.allPagesNumber.length) {
        this.disableNext = true;
        this.disablePrevious = false;
        this.gamingNewsCards = cards.filter((card, i) => i >= (this.page * pagesInc) - pagesInc && i < this.page * pagesInc);
      } else {
        this.disablePrevious = false;
        this.disableNext = false;
        this.gamingNewsCards = cards.filter((card, i) => i >= (this.page * pagesInc) - pagesInc && i < this.page * pagesInc);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
