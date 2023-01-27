import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBehaviorDropdownButton]'
})
export class BehaviorDropdownButtonDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    const firstItem = this.elRef.nativeElement.parentElement.parentElement.querySelector('.dropdown-item');
    this.renderer.addClass(firstItem, 'active');
  }


  @HostListener('click')
  setActive(): void {
    const dropdownMenu = this.elRef.nativeElement.parentElement.parentElement;
    const items: NodeList = dropdownMenu.querySelectorAll('.dropdown-item');
    items.forEach((item: any) => {
      if (item.className === 'dropdown-item active') {
        this.renderer.removeClass(item, 'active')
      }
    });
    this.renderer.addClass(this.elRef.nativeElement, 'active');
    const elementValue: string = this.elRef.nativeElement.innerHTML;
    this.elRef.nativeElement.parentElement.parentElement.parentElement.firstChild.innerHTML = `<strong>Show:</strong> ${elementValue}`;
  }
}



