import {Component, Input, OnInit} from '@angular/core';
import {GameInterfaceModel} from "../../services/interface/game-interface.model";
import {FreeGameInterfaceModel} from "../../services/interface/free-game-interface.model";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() public allGames!: GameInterfaceModel;
  @Input() public freeGames!: FreeGameInterfaceModel;
  @Input() public landScapeGames!: GameInterfaceModel;
  @Input() public cardStyle!: {};
  @Input() public cardType!: string;
  @Input() public placeholderCard: boolean = false;
  public cardData: any;

  constructor() {
  }

  ngOnInit() {
    if (this.cardType === 'freeGames') {
      this.cardData = this.freeGames;
    } else if (this.cardType === 'carouselCard') {
      this.cardData = this.allGames;
    } else if (this.cardType === 'landScapeGames') {
      this.cardData = this.landScapeGames;
    }
  }
}
