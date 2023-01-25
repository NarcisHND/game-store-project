import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('click')
  prevFunc(): void {
    let elm = this.el.nativeElement.parentElement.parentElement.parentElement.children[1];
    let itemContainer = elm.getElementsByClassName('slider-main');
    let item = elm.getElementsByClassName('item');
    if (item.length > 5) {
      itemContainer[0].prepend(item[item.length - 1]);
    }
  }
}
