import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myReverseIf]'
})
export class MyReverseIfDirective {
  private hasView: boolean = false;
  constructor(private templateRef: TemplateRef<any>, private viewConainer: ViewContainerRef) { }

  @Input() set myReverseIf(condition: boolean) {
    console.log('in custom dir'+condition);
    if (!condition) {
      console.log('first');
      this.viewConainer.clear();
    }
    if (condition) {
      console.log('second');
      this.viewConainer.createEmbeddedView(this.templateRef);
    }
  }
}
