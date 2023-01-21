import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHoverGameCard]'
})
export class HoverGameCardDirective {
  private buttonWishEl!: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseover')
  makeVisibleWishButton() {
    this.buttonWishEl = this.elRef.nativeElement.firstChild.firstChild;
    this.renderer.setStyle(this.buttonWishEl, 'display', 'flex');
  }

  @HostListener('mouseleave')
  disableWishButton() {
    this.renderer.setStyle(this.buttonWishEl, 'display', 'none');
  }
}
