import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {GameModel} from "../../../../../../../services/interface/game.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view-games',
  templateUrl: './view-games.component.html',
  styleUrls: ['./view-games.component.scss']
})
export class ViewGamesComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  @Input() public allGames!: GameModel[];
  public backupGames!: GameModel[];
  private filterActivation = false;
  private orderData!: string;
  @Input() public gamesType!: string | null;
  @Input() public showMessage!: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {
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
    this.backupGames = this.allGames;
    let sortGames!: GameModel[];
    this.orderData = order;

    if (this.filterActivation) {
      sortGames = this.allGames;
    } else {
      this.allGames = [];
      sortGames = this.backupGames.slice();
    }

    if (order === 'all') {
      if (this.gamesType) {
        this.filterFunction(this.gamesType)
      } else {
        this.allGames = this.backupGames.slice();
      }
    } else if (order === 'asc') {
      const ascOrder: GameModel[] = sortGames.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
      this.allGames = ascOrder;
    } else if (order === 'desc') {
      const descOrder: GameModel[] = sortGames.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0));
      this.allGames = descOrder;
    } else if (order === 'alphabetical') {
      const alphOrder: GameModel[] = sortGames.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
      this.allGames = alphOrder;
    }
  }

  filterFunction(type: string): void {
    this.filterActivation = true;
    this.allGames = [];
    const data = this.backupGames.slice();
    this.allGames = data.filter((game) => game.type === type);

    if (this.orderData !== 'all' && this.orderData !== undefined) {
      this.sortFunction(this.orderData);
    }
  }

  selectGame(game: GameModel) {
    this.router.navigate(['home/game', game.id, 'gamesData']);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}


