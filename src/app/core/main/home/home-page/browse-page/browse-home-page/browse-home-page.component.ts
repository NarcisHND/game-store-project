import {Component, OnDestroy, OnInit} from '@angular/core';
import {GamesTypeCardModel} from "../../../../../../services/interface/gamesTypeCard-model";
import {Subscription} from "rxjs";
import {GamesDataService} from "../../../../../../services/games-data.service";

@Component({
  selector: 'app-browse-home-page',
  templateUrl: './browse-home-page.component.html',
  styleUrls: ['./browse-home-page.component.scss']
})
export class BrowseHomePageComponent implements OnInit, OnDestroy {
  public cardsData!: GamesTypeCardModel[];
  private subscription!: Subscription;
  public loading: boolean = false;
  public filterData!: string;

  constructor(private gameDataService: GamesDataService) {
  }

  ngOnInit() {
    this.loadData();
    window.scroll(0, 0);
  }

  loadData(): void {
    this.loading = true;
    this.subscription = this.gameDataService.getGamesTypesCard().subscribe({
      next: (res) => {
        this.cardsData = res;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
