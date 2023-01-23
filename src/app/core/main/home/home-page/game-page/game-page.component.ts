import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GamesDataService} from "../../../../../services/games-data.service";
import {GameModel} from "../../../../../services/interface/game.model";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  public loading = false;
  public gameData!: GameModel;

  constructor(private route: ActivatedRoute, private gamesService: GamesDataService) {
  }

  ngOnInit() {
    window.scroll(0, 0);
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.route.paramMap.subscribe(params => {
      const gameId = Number(params.get('id')) - 1;
      this.gamesService.getGame(gameId).subscribe({
        next: (res) => {
          this.gameData = res;
          this.loading = false;
        },
        error: (err) => {
          console.log(err);
          this.loading = false;
        }
      });
    });
  }
}
