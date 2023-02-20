import {AfterViewInit, Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: "[appSelectGameHtmlElement]"
})
export class SelectGameHtmlElementDirective implements AfterViewInit {
  private htmlElCarousel!: NodeList;
  private htmlElGameCards!: NodeList;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.htmlElCarousel = this.elRef.nativeElement.querySelectorAll(".carousel-item");
    this.htmlElGameCards = this.elRef.nativeElement.parentElement.querySelectorAll(".rec_games_card_container");
  }

  @HostListener("click")
  changeGameImage(): void {
    this.htmlElGameCards.forEach((el: Node) => {
      this.renderer.removeAttribute(el, "id");
      this.renderer.setAttribute(this.elRef.nativeElement, "id", "selectGame");
    })
  }
}
