import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngUnless]'
})
export class NgUnlessDirective {

  @Input() set ngUnless(condition: boolean) {
    if (!condition) {
      this.viewConteinerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewConteinerRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewConteinerRef: ViewContainerRef
  ) { }

}
