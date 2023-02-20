import {AfterViewInit, Directive, ElementRef, HostListener, OnDestroy, Renderer2} from "@angular/core";


@Directive({
  selector: "[appRecGamesCarousel]"
})
export class RecGamesCarouselDirective implements AfterViewInit, OnDestroy {
  private htmlElCarousel!: NodeList;
  private carouselFunction!: unknown;
  private htmlElGameCards!: NodeList;
  private createCarouselInterval!: number;
  private carouselActivation = true;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.htmlElCarousel = this.elRef.nativeElement.parentElement.parentElement.firstChild.querySelectorAll(".carousel-item");
    this.htmlElGameCards = this.elRef.nativeElement.parentElement.querySelectorAll(".rec_games_card_container");

    this.renderer.addClass(this.htmlElCarousel[0], "active");
    this.renderer.addClass(this.htmlElGameCards[0], "active_card");

    this.carouselFunction = (): void => {
      let activeIndex = 0;
      this.htmlElCarousel.forEach((el: Node, index: number) => {
        const convToHtmlEl = el as HTMLElement;
        if (convToHtmlEl.id === "stopCarousel") {
          this.carouselActivation = false;

        } else {
          this.carouselActivation = true;

          if (convToHtmlEl.className.includes("active")) {
            this.renderer.removeClass(convToHtmlEl, "active");
            this.renderer.removeClass(this.htmlElGameCards[index], "active_card");
            activeIndex = index;
          }
        }
      })

      if (this.carouselActivation) {
        activeIndex !== 5 ? activeIndex++ : activeIndex = 0;
        this.renderer.addClass(this.htmlElCarousel[activeIndex], "active");
        this.renderer.addClass(this.htmlElGameCards[activeIndex], "active_card");
      }
    }

    this.startCarousel();
  }

  @HostListener("click")
  nextFunc(): void {
    this.stopCarousel();
    let gameCard: string;
    this.htmlElGameCards.forEach((el: Node) => {
      const convToHtmlEl = el as HTMLElement;
      if (convToHtmlEl.id === "selectGame") {
        const convToHtmlImg = convToHtmlEl?.firstChild?.firstChild as HTMLImageElement;
        gameCard = convToHtmlImg.src;
      }
    });
    this.htmlElCarousel.forEach((el: Node, index: number) => {
      const convToHtmlEl = el as HTMLElement;
      if (convToHtmlEl.className.includes("active")) {
        this.renderer.removeClass(el, "active");
        this.renderer.removeClass(this.htmlElGameCards[index], "active_card");
      }
      const convToHtmlImg = convToHtmlEl?.firstChild as HTMLImageElement;
      const gameImageName = convToHtmlImg.src;
      if (gameCard === gameImageName) {
        this.renderer.addClass(el, "active");
        this.renderer.setAttribute(this.htmlElGameCards[index], "id", "selectGame");
        this.renderer.addClass(this.htmlElGameCards[index], "active_card");
      }
    });
    this.startCarousel();
  }

  stopCarousel(): void {
    clearInterval(this.createCarouselInterval);
  }

  startCarousel(): void {
    const convToNumber = this.carouselFunction as TimerHandler;
    this.createCarouselInterval = setInterval(convToNumber, 2000);
  }

  ngOnDestroy() {
    this.stopCarousel();
  }
}
