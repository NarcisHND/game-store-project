import {Component, Input} from '@angular/core';
import {GameModel} from "../../services/interface/game.model";
import {GamesDataService} from "../../services/games-data.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent {
  @Input() sectionTitle = 'Section Title';
  @Input() cardData!: GameModel[];
  @Input() loadingCarouselGames = true;

  constructor(private gamesService: GamesDataService, private router: Router, private route: ActivatedRoute) {
  }

  selectGame(game: GameModel): void {
    this.router.navigate(['game', game.id, 'gamesData'], {
      relativeTo: this.route,
    })
  }
}
