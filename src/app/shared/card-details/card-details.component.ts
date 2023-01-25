import {Component, Input} from '@angular/core';
import {GameModel} from "../../services/interface/game.model";
import {ActivatedRoute, Router} from "@angular/router";
import {GamesDataService} from "../../services/games-data.service";

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent {
  @Input() cardData!: GameModel[];
  @Input() loadingLandscapeGames: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private service: GamesDataService) {
  }

  selectGame(game: GameModel): void {
    this.router.navigate(['game', game.id, 'landscapeGamesData'], {relativeTo: this.route})
  }
}
