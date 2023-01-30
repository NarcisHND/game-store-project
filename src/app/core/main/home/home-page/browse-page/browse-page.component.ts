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
  private subscription!: Subscription;
  public loading: boolean = false;
  public filterData!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
