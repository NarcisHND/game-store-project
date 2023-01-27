import {Component, OnDestroy, OnInit} from '@angular/core';
import {GamesDataService} from "../../../../../services/games-data.service";
import {GamesTypeCardModel} from "../../../../../services/interface/gamesTypeCard-model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-browse-page',
  templateUrl: './browse-page.component.html',
  styleUrls: ['./browse-page.component.scss']
})
export class BrowsePageComponent implements OnInit, OnDestroy {
  public cardsData!: GamesTypeCardModel[];
  private subscription!: Subscription;
  public loading: boolean = false;

  constructor(private gameDataService: GamesDataService) {
  }

  ngOnInit(): void {
    this.loadData()
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
