import {Component, Input} from '@angular/core';
import {GameInterfaceModel} from "../../services/interface/game-interface.model";

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent {
  @Input() sectionTitle: string = 'Section Title';
  @Input() cardData!: GameInterfaceModel[];
  @Input() loadingCarouselGames: boolean = true;

}
