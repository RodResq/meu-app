import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAlteraCor]'
})
export class AlteraCorDirective {

  @HostBinding('style.color') minhaCorDeFonte: String;

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2
    ) {
    let color = '';
    switch (Math.floor(Math.random() * 4)) {
      case 0: color = 'red'; break;
      case 1: color = 'green'; break;
      case 2: color = 'orange'; break;
      case 3: color = 'blue'; break;
    }
    this.render.setStyle(this.elementRef.nativeElement, 'background-color', color);

  }

  @HostListener('click') recuperarClick() {
    this.minhaCorDeFonte = 'white';
  }

}
