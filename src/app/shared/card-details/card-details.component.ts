import {Component, Input} from '@angular/core';
import {GameModel} from "../../services/interface/game.model";
import {GamesDataService} from "../../services/games-data.service";

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent {
  @Input() cardData!: GameModel[];
  @Input() loadingLandscapeGames: boolean = false;

  constructor() {
  }

}
