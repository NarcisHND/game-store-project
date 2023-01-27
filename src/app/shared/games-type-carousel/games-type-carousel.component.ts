import {Component, Input, OnInit} from '@angular/core';
import {GamesTypeCardModel} from "../../services/interface/gamesTypeCard-model";

@Component({
  selector: 'app-games-type-carousel',
  templateUrl: './games-type-carousel.component.html',
  styleUrls: ['./games-type-carousel.component.scss']
})
export class GamesTypeCarouselComponent implements OnInit {
  @Input() public gameTypes!: GamesTypeCardModel[];

  constructor() {
  }

  ngOnInit() {
  }

}
