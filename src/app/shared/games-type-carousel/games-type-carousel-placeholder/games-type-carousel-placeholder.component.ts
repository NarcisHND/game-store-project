import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-games-type-carousel-placeholder',
  templateUrl: './games-type-carousel-placeholder.component.html',
  styleUrls: ['./games-type-carousel-placeholder.component.scss']
})
export class GamesTypeCarouselPlaceholderComponent implements OnInit {
  public placeholderCards!: {}[];

  ngOnInit(): void {
    this.placeholderCards = [{}, {}, {}, {}];
  }
}
