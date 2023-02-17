import {Component, OnDestroy, OnInit} from '@angular/core';
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
  public allCards!: GamingNewsCardModel[];
  public gamingNewsMainCards!: GamingNewsCardModel[];
  public loading = false;
  private subscription!: Subscription;

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

        this.gamingNewsMainCards = res.filter((card, i) => i < 2);
        this.allCards = res.filter((card, i) => i >= 2);
        this.gamingNewsCards = this.allCards.slice().filter((card, i) => i < 10);

        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  getGamingNewsCards(gamingNCards: unknown[]): void {
    this.gamingNewsCards = gamingNCards as GamingNewsCardModel[];
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
