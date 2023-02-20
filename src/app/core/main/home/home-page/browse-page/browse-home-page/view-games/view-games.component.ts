import {
  Component,
  Input,
  OnDestroy,
  Output,
} from "@angular/core";
import {Subject, Subscription} from "rxjs";
import {GameModel} from "../../../../../../../services/interface/game.model";
import {Router} from "@angular/router";

@Component({
  selector: "app-view-games",
  templateUrl: "./view-games.component.html",
  styleUrls: ["./view-games.component.scss"]
})
export class ViewGamesComponent implements OnDestroy {
  private subscription!: Subscription;
  @Input() public allGames!: GameModel[];
  @Input() public backupGames!: GameModel[];
  @Input() public showMessage!: boolean;
  @Input() public allPagesNumber: number[] = [];
  @Output() sendOrderType = new Subject<string>();

  constructor(private router: Router) {
  }

  selectGame(game: GameModel) {
    this.router.navigate(["home/game", game.id, "gamesData"]).then();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}


