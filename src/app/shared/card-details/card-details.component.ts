import {Component, Input} from '@angular/core';
import {GameInterfaceModel} from "../../services/interface/game-interface.model";

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent {
  @Input() cardData!: GameInterfaceModel[];
  @Input() loadingLandscapeGames: boolean = false;
}
