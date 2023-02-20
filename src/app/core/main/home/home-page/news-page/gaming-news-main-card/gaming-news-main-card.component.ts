import {Component, Input} from "@angular/core";
import {GamingNewsCardModel} from "../../../../../../services/interface/gaming-news-card.model";

@Component({
  selector: "app-gaming-news-main-card",
  templateUrl: "./gaming-news-main-card.component.html",
  styleUrls: ["./gaming-news-main-card.component.scss"]
})
export class GamingNewsMainCardComponent {
  @Input() newsCard!: GamingNewsCardModel;
}
