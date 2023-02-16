import {Component, Input} from '@angular/core';
import {GamesTypeCardModel} from "../../services/interface/gamesTypeCard-model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-games-type-carousel',
  templateUrl: './games-type-carousel.component.html',
  styleUrls: ['./games-type-carousel.component.scss']
})
export class GamesTypeCarouselComponent {
  @Input() public gameTypes!: GamesTypeCardModel[];

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  selectGamesType(game: GamesTypeCardModel): void {
    this.router.navigate(['games', game.name], {relativeTo: this.route});
  }
}
