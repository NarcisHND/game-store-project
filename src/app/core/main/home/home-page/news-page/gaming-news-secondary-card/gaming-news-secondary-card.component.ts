import {Component, Input} from '@angular/core';
import {GamingNewsCardModel} from "../../../../../../services/interface/gaming-news-card.model";

@Component({
  selector: 'app-gaming-news-secondary-card',
  templateUrl: './gaming-news-secondary-card.component.html',
  styleUrls: ['./gaming-news-secondary-card.component.scss']
})
export class GamingNewsSecondaryCardComponent {
  @Input() newsCard!: GamingNewsCardModel;
}
