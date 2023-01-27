import {Component, Input, OnInit} from '@angular/core';
import {GameModel} from "../../services/interface/game.model";
import {FreeGameModel} from "../../services/interface/free-game.model";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() public allGames!: GameModel;
  @Input() public freeGames!: FreeGameModel;
  @Input() public landScapeGames!: GameModel;
  @Input() public cardStyle!: {};
  @Input() public cardType!: string;
  @Input() public placeholderCard: boolean = false;
  public cardData: any;

  constructor() {
  }

  ngOnInit(): void {
    if (this.cardType === 'freeGames') {
      this.cardData = this.freeGames;
    } else if (this.cardType === 'carouselCard') {
      this.cardData = this.allGames;
    } else if (this.cardType === 'landScapeGames') {
      this.cardData = this.landScapeGames;
    }
  }
}
