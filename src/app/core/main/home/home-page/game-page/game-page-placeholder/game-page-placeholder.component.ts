import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-game-page-placeholder',
  templateUrl: './game-page-placeholder.component.html',
  styleUrls: ['./game-page-placeholder.component.scss']
})
export class GamePagePlaceholderComponent {
  @Input() public loading: boolean = true;

}
