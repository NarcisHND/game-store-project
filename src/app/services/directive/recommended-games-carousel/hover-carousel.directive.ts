import {AfterViewInit, Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: "[appHoverCarousel]"
})
export class HoverCarouselDirective implements AfterViewInit {
  private carouselItems!: NodeList;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.carouselItems = this.elRef.nativeElement.parentElement.querySelectorAll(".carousel-item");
  }

  @HostListener("mouseover")
  setId(): void {
    this.carouselItems.forEach((item: Node) => {
      this.renderer.setAttribute(item, "id", "stopCarousel");
    });
  }

  @HostListener("mouseleave")
  removeId(): void {
    this.carouselItems.forEach((item: Node) => {
      this.renderer.removeAttribute(item, "id",);
    });
  }
}
