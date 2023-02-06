import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {GamesDataService} from "../../../../../../../services/games-data.service";
import {GameModel} from "../../../../../../../services/interface/game.model";

@Component({
  selector: 'app-type-games-page',
  templateUrl: './type-games-page.component.html',
  styleUrls: ['./type-games-page.component.scss']
})
export class TypeGamesPageComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  public gamesType!: string | null;
  public gamesData!: GameModel[];
  public loading: boolean = false;
  public filteredData!: GameModel[];
  public message: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private gamesDataService: GamesDataService,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.subscription = this.route.paramMap.subscribe((param) => {
      this.gamesType = param.get('type');
      this.subscription = this.gamesDataService.getGames().subscribe({
        next: (res) => {
          this.gamesData = res.filter(game => game.type === this.gamesType);
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        }
      })
    })
  }

  getFilteredData(event: GameModel[]): void {
    this.filteredData = event;
    if (this.filteredData.length === 0) {
      this.message = true;
    } else {
      this.message = false;
    }
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
