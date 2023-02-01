import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appResetOrder]'
})
export class ResetOrderDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('keydown')
  resetOrder() {
    const dropdownBtn = this.elRef.nativeElement.closest('body').querySelector('.filter_btn_dropdown');
    const dropdownItems = this.elRef.nativeElement.closest('body').querySelectorAll('.dropdown-item');
    dropdownItems.forEach((el: any) => {
      if (el.className === 'dropdown-item active') {
        this.renderer.removeClass(el, 'active')
      }
    });
    this.renderer.addClass(dropdownItems[0], 'active');
    dropdownBtn.innerHTML = `<strong>Show:</strong> ` + dropdownItems[0].innerHTML;
  }
}
