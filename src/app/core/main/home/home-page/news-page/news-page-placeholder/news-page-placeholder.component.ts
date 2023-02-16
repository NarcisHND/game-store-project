import {Component} from '@angular/core';

@Component({
  selector: 'app-news-page-placeholder',
  templateUrl: './news-page-placeholder.component.html',
  styleUrls: ['./news-page-placeholder.component.scss']
})
export class NewsPagePlaceholderComponent {
  public placeholderCards: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
