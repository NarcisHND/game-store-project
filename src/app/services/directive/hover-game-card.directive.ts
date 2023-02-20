import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: "[appHoverGameCard]"
})
export class HoverGameCardDirective {
  private buttonWishEl!: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener("mouseover")
  makeVisibleWishButton(): void {
    this.buttonWishEl = this.elRef.nativeElement.firstChild.firstChild;
    this.renderer.setStyle(this.buttonWishEl, "display", "flex");
  }

  @HostListener("mouseleave")
  disableWishButton(): void {
    this.renderer.setStyle(this.buttonWishEl, "display", "none");
  }
}
