import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {GamesDataService} from "../../services/games-data.service";
import {GamesTypeCardModel} from "../../services/interface/gamesTypeCard-model";

@Component({
  selector: 'app-games-type-carousel',
  templateUrl: './games-type-carousel.component.html',
  styleUrls: ['./games-type-carousel.component.scss']
})
export class GamesTypeCarouselComponent implements OnInit {
  public gameTypes!: GamesTypeCardModel[];
  private subscription!: Subscription;

  constructor(private gamesDataService: GamesDataService) {
  }

  ngOnInit() {
    this.subscription = this.gamesDataService.getGamesTypesCard().subscribe({
      next: (res) => {
        this.gameTypes = res;
      }, error: (err) => {
        console.log(err);
      }
    })
  }

}
