import {Component, OnDestroy, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {map, Observable, startWith, Subscription} from "rxjs";
import {GameModel} from "../../../../../../../services/interface/game.model";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-games-filter',
  templateUrl: './games-filter.component.html',
  styleUrls: ['./games-filter.component.scss']
})
export class GamesFilterComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  @Input() public gamesData!: GameModel[];
  public control = new FormControl('');
  public gamesName: string[] = [];
  public filterObs!: Observable<string[]>;
  private filteredGames: GameModel[] = [];
  private platformTypeFilter!: string;
  private priceTypeFilter!: string | number;
  @Output() public filteredGamesEvent: EventEmitter<GameModel[]> = new EventEmitter<GameModel[]>();
  public filtersNumber!: number;

  constructor() {
  }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(): void {
    this.gamesData.forEach((game) => {
      this.gamesName.push(game.name);
    })
    if (this.gamesData) {
      this.filteredDataFunction();
    }
  }

  filteredDataFunction(): void {
    this.filterObs = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    let gData: GameModel[];
    let gamesData = this.gamesName.filter(game => this._normalizeValue(game).includes(filterValue));

    if (this.filteredGames.length > 0) {
      gData = this.filteredGames;
    } else {
      gData = this.gamesData;
    }

    let data = gData.filter(game => this._normalizeValue(game.name).includes(filterValue));
    this.filteredGamesEvent.emit(data);
    return gamesData;
  }

  _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  filterByPrice(price: string | number): void {
    let games: GameModel[] = this.gamesData;
    let filterResults: GameModel[];
    this.priceTypeFilter = price;

    if (this.platformTypeFilter) {
      if (price === 'free') {
        filterResults = games.filter(game => game.price === price && game.platform === this.platformTypeFilter);
      } else if (price === 'above') {
        filterResults = games.filter(game => game.price >= 80 && game.platform === this.platformTypeFilter);
      } else {
        filterResults = games.filter(game => game.price <= price && game.platform === this.platformTypeFilter);
      }
    } else {
      if (price === 'free') {
        filterResults = games.filter(game => game.price === price);
      } else if (price === 'above') {
        filterResults = games.filter(game => game.price >= 80);
      } else {
        filterResults = games.filter(game => game.price <= price);
      }
    }
    this.setFiltersNumber();
    this.filteredGames = filterResults;
    this.filteredGamesEvent.emit(filterResults);
  }

  setFiltersNumber() {
    if (this.priceTypeFilter && this.platformTypeFilter) {
      this.filtersNumber = 2;
    } else {
      this.filtersNumber = 1;
    }
  }

  filterByPlatform(type: string): void {
    let filterResults: GameModel[] = [];
    let games: GameModel[] = this.gamesData;
    this.platformTypeFilter = type;

    if (this.priceTypeFilter) {
      this.filterByPrice(this.priceTypeFilter);
    } else {
      filterResults = games.filter(game => game.platform === type);
      this.setFiltersNumber();
      this.filteredGames = filterResults;
      this.filteredGamesEvent.emit(filterResults);
    }
  }

  resetFilter() {
    this.filteredGamesEvent.emit(this.gamesData);
    this.filtersNumber = NaN;
    this.filteredGames = [];
    this.priceTypeFilter = NaN;
    this.platformTypeFilter = '';
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
