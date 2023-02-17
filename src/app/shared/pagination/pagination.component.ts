import {Component, OnInit, Input, Output} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  public allPagesNumber: number[] = [];
  private pagesIncrement!: number;
  public page!: number;
  public disableNext = false;
  public disablePrevious = false;
  public gamingNewsCards!: unknown[];
  @Output() public sendItems: Subject<unknown[]> = new Subject<unknown[]>();
  @Input() public allItems!: unknown[];

  ngOnInit() {
    this.page = 1;
    this.getPagesNumber();
  }

  getPagesNumber(): void {
    let pageCount = 0;
    this.disablePrevious = true;

    if (this.allItems.length > 10) {
      this.pagesIncrement = 10;
    } else {
      this.pagesIncrement = this.allItems.length;
      this.allPagesNumber.push(1);
      this.disableNext = true;
    }

    this.allItems.forEach((card: unknown, i: number): void => {
      if (i == this.pagesIncrement && this.pagesIncrement >= 10) {
        pageCount++;
        this.allPagesNumber.push(pageCount);
        this.pagesIncrement = this.pagesIncrement + 10;

      } else if (i != this.pagesIncrement && i > this.allPagesNumber.length * 10) {
        pageCount++;
        this.allPagesNumber.push(pageCount);
      }
    })
  }


  nextPage(): void {
    window.scroll(0, 0);
    const stopNext = this.allPagesNumber.length;
    const pagesInc = 10;
    this.disablePrevious = false;
    const cards = this.allItems.slice();

    if (this.allPagesNumber.length > 1 && stopNext !== this.page) {
      this.gamingNewsCards = cards.filter((card: unknown, i: number) => i >= this.page * pagesInc && i < (this.page * pagesInc) + pagesInc);
      this.sendItems.next(this.gamingNewsCards);
      this.page++;
      if (stopNext === this.page) {
        this.disableNext = true;
      }
    }
  }

  prevPage(): void {
    window.scroll(0, 0);
    const pagesInc = 10;
    this.disableNext = false;
    const cards = this.allItems.slice();

    if (this.page !== 1) {
      this.page--;
      this.gamingNewsCards = cards.filter((card: unknown, i: number) => i >= (this.page * pagesInc) - 10 && i < this.page * pagesInc);
      this.sendItems.next(this.gamingNewsCards);
      if (this.page === 1) {
        this.disablePrevious = true;
      }
    }
  }

  selectPage(page: number): void {
    window.scroll(0, 0);
    if (this.allPagesNumber.length > 1) {
      const pagesInc = 10;
      this.page = page;
      const cards = this.allItems.slice();

      if (this.page === 1) {
        this.disablePrevious = true;
        this.disableNext = false;
        this.gamingNewsCards = cards.filter((card: unknown, i: number) => i < pagesInc);
        this.sendItems.next(this.gamingNewsCards);
      } else if (this.page === this.allPagesNumber.length) {
        this.disableNext = true;
        this.disablePrevious = false;
        this.gamingNewsCards = cards.filter((card: unknown, i: number) => i >= (this.page * pagesInc) - pagesInc && i < this.page * pagesInc);
        this.sendItems.next(this.gamingNewsCards);
      } else {
        this.disablePrevious = false;
        this.disableNext = false;
        this.gamingNewsCards = cards.filter((card: unknown, i: number) => i >= (this.page * pagesInc) - pagesInc && i < this.page * pagesInc);
        this.sendItems.next(this.gamingNewsCards);
      }
    }
  }
}
