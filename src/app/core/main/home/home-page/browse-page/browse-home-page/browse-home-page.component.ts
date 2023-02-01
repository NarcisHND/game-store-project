import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {GamesTypeCardModel} from "../../../../../../services/interface/gamesTypeCard-model";
import {Subscription} from "rxjs";
import {GamesDataService} from "../../../../../../services/games-data.service";
import {GameModel} from "../../../../../../services/interface/game.model";

@Component({
  selector: 'app-browse-home-page',
  templateUrl: './browse-home-page.component.html',
  styleUrls: ['./browse-home-page.component.scss']
})
export class BrowseHomePageComponent implements OnInit, OnDestroy {
  public cardsData!: GamesTypeCardModel[];
  public gamesData!: GameModel[];
  public filteredData!: GameModel[];
  private subscription!: Subscription;
  public loadingCards: boolean = false;
  public loadingGames: boolean = false;
  public placeholders: {}[] = [{}, {}, {}, {}, {}, {}, {}, {}];

  constructor(private gamesDataService: GamesDataService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.loadData();
    window.scroll(0, 0);
  }

  loadData(): void {
    this.loadingCards = true;
    this.loadingGames = true;

    // Get Cards
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

    // Get Games
    this.subscription = this.gamesDataService.getGames().subscribe({
      next: (res) => {
        this.gamesData = res;
        this.loadingGames = false;
      },
      error: (err) => {
        console.error(err);
        this.loadingGames = false;
      }
    })
  }

  getFilteredData(games: GameModel[]) {
    this.filteredData = games;
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}