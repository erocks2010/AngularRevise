import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[myAtrributeDirective]'
})
export class MyAtrributeDirectiveDirective {
  @Input() backColor: string;
  @Input() defaultColor: string;
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = null;
  }
  ngOnInit

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.backColor;
  }
  @HostListener('mouseleave') onmouseleave() {
    this.el.nativeElement.style.backgroundColor = this.defaultColor;
  }
}
