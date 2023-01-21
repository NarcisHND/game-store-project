import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appScrollUp]'
})
export class ScrollUpDirective {

  constructor(private elRef: ElementRef) {
  }

  @HostListener('click')
  scrollUp() {
    const selectNavbarElRef = this.elRef.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.navbar');
    selectNavbarElRef.scrollIntoView();
  }
}
