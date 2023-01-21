import {AfterViewInit, Directive, ElementRef, HostListener, Renderer2} from '@angular/core';


@Directive({
  selector: '[appRecGamesCarousel]'
})
export class RecGamesCarouselDirective implements AfterViewInit {
  private htmlElCarousel!: NodeList;
  private carouselFunction!: Function;
  private htmlElGameCards!: NodeList;
  private createCarouselInterval!: number;
  private carouselActivation: boolean = true;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.htmlElCarousel = this.elRef.nativeElement.parentElement.parentElement.firstChild.querySelectorAll('.carousel-item');
    this.renderer.addClass(this.htmlElCarousel[0], 'active');
    this.htmlElGameCards = this.elRef.nativeElement.parentElement.querySelectorAll('.rec_games_card_container');
    this.renderer.addClass(this.htmlElGameCards[0], 'active_card');

    this.carouselFunction = () => {
      let activeIndex: number = 0;
      this.htmlElCarousel.forEach((el: any, index: number) => {
        if (el.id === 'stopCarousel') {
          this.carouselActivation = false;
        } else {
          this.carouselActivation = true;
          if (el.className === 'carousel-item active') {
            this.renderer.removeClass(el, 'active');
            this.renderer.removeClass(this.htmlElGameCards[index], 'active_card');
            activeIndex = index;
          }
        }
      })

      if (this.carouselActivation) {
        activeIndex !== 5 ? activeIndex++ : activeIndex = 0;
        this.renderer.addClass(this.htmlElCarousel[activeIndex], 'active');
        this.renderer.addClass(this.htmlElGameCards[activeIndex], 'active_card');
      }
    }

    this.startCarousel();
  }

  @HostListener('click')
  nextFunc() {
    this.stopCarousel();
    let gameCard: HTMLObjectElement;
    this.htmlElGameCards.forEach((el: any) => {
      if (el.id === 'selectGame') {
        gameCard = el.firstChild.firstChild.src;
      }
    });
    this.htmlElCarousel.forEach((el: any, index: number) => {
      if (el.className === 'carousel-item active') {
        this.renderer.removeClass(el, 'active');
        this.renderer.removeClass(this.htmlElGameCards[index], 'active_card');
      }

      const gameImageName = el.firstChild.src;
      if (gameCard === gameImageName) {
        this.renderer.addClass(el, 'active');
        this.renderer.setAttribute(this.htmlElGameCards[index], 'id', 'selectGame');
        this.renderer.addClass(this.htmlElGameCards[index], 'active_card');
      }
    });
    this.startCarousel();
  }

  stopCarousel() {
    clearInterval(this.createCarouselInterval);
  }

  startCarousel() {
    this.createCarouselInterval = setInterval(this.carouselFunction, 3000);
  }
}
