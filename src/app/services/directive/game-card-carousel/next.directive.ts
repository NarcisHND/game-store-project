import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('click')
  nextFunc() {
    let elm = this.el.nativeElement.parentElement.parentElement.parentElement.children[1];
    let itemContainer = elm.getElementsByClassName('slider-main');
    let item = elm.getElementsByClassName('item');
    if (item.length > 5) {
      itemContainer[0].append(item[0]);
    }
  }
}
