import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appResetDropdownFilter]'
})
export class ResetDropdownFilterDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click')
  reset() {
    const priceDropDownEls = this.elRef.nativeElement.closest('body').querySelectorAll('.btn-check-price');
    const platformDropDownEls = this.elRef.nativeElement.closest('body').querySelectorAll('.btn-check-platform');

    priceDropDownEls.forEach((el: HTMLInputElement) => {
      if (el.checked) {
        el.checked = false;
      }
    });

    platformDropDownEls.forEach((el: HTMLInputElement) => {
      if (el.checked) {
        el.checked = false;
      }
    })

    this.resetOrder();
  }

  resetOrder() {
    const dropdownOrderBtn = this.elRef.nativeElement.closest('body').querySelector('.filter_btn_dropdown');
    const dropdownOrderItems = this.elRef.nativeElement.closest('body').querySelectorAll('.dropdown-item');
    dropdownOrderItems.forEach((el: HTMLElement) => {
      if (el.className === 'dropdown-item active') {
        this.renderer.removeClass(el, 'active')
      }
    });
    this.renderer.addClass(dropdownOrderItems[0], 'active');
    dropdownOrderBtn.innerHTML = `<strong>Show:</strong> ` + dropdownOrderItems[0].innerHTML;
  }
}
