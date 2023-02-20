import {Directive, ElementRef, HostListener} from "@angular/core";

@Directive({
  selector: "[appScrollUp]"
})
export class ScrollUpDirective {

  constructor(private elRef: ElementRef) {
  }

  @HostListener("click")
  scrollUp(): void {
    const selectNavbarElRef = this.elRef.nativeElement.closest("body").querySelector(".navbar");
    selectNavbarElRef.scrollIntoView();
  }
}
