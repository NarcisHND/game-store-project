import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('click')
  nextFunc(): void {
    const elm = this.el.nativeElement.parentElement.parentElement.parentElement.children[1];
    const itemContainer = elm.getElementsByClassName('slider-main');
    const item = elm.getElementsByClassName('item');
    if (item.length > 4) {
      itemContainer[0].append(item[0]);
    }
  }
}
