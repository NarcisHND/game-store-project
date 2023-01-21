import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInp') inputS!: ElementRef;
  public selectGame: string | undefined;

  constructor(private route: Router) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  searchGame() {
    this.selectGame = this.inputS.nativeElement.value;
    this.route.navigate(['search', this.selectGame]);
    this.inputS.nativeElement.value = '';
  }
}
