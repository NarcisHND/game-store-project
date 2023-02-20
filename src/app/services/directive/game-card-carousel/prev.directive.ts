import {Directive, ElementRef, HostListener} from "@angular/core";

@Directive({
  selector: "[appPrev]"
})
export class PrevDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener("click")
  prevFunc(): void {
    const elm = this.el.nativeElement.parentElement.parentElement.parentElement.children[1];
    const itemContainer = elm.getElementsByClassName("slider-main");
    const item = elm.getElementsByClassName("item");
    if (item.length > 4) {
      itemContainer[0].prepend(item[item.length - 1]);
    }
  }
}
