import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-game-page-placeholder',
  templateUrl: './placeholder-game-page.component.html',
  styleUrls: ['./placeholder-game-page.component.scss']
})
export class PlaceholderGamePageComponent {
  @Input() public loading: boolean = true;

}
