import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-type-games-page',
  templateUrl: './type-games-page.component.html',
  styleUrls: ['./type-games-page.component.scss']
})
export class TypeGamesPageComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  public gamesType!: string | null;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe((param) => {
      this.gamesType = param.get('type');
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
