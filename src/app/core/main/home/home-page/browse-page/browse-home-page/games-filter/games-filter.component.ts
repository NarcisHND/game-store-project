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
  public filteredData!: Observable<string[]>;
  @Output() public filteredGamesEvent: EventEmitter<GameModel[]> = new EventEmitter<GameModel[]>();

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
    this.filteredData = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    let gamesData = this.gamesName.filter(game => this._normalizeValue(game).includes(filterValue));
    let data = this.gamesData.filter(game => this._normalizeValue(game.name).includes(filterValue));
    this.filteredGamesEvent.emit(data);
    return gamesData;
  }

  _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
