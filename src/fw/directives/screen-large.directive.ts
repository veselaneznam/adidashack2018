import {Directive, Input, OnDestroy, TemplateRef, ViewContainerRef} from '@angular/core';
import {ScreenService} from '../services/screen.service';
import {Subscription} from 'rxjs/Subscription';

@Directive({
  selector: '[screenLarge]'
})

export class ScreenLargeDirective implements OnDestroy{
  private hasView = false;
  private screenSubscription: Subscription;

  constructor(private viewContainer: ViewContainerRef,
              private template: TemplateRef<Object>,
              private screenService: ScreenService) {
    screenService.resize$.subscribe(() => this.onResize());
  }

  @Input()
  set screenLarge(condition) {
    condition = this.screenService.screenWidth >= this.screenService.largeBreakpoint;

    if (condition && !this.hasView) {
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.template);
    } else if (!condition && this.hasView) {
      this.hasView = false;
      this.viewContainer.clear();
    }
  }

  onResize() {
    this.screenLarge = false;
  }

  ngOnDestroy(): void {
    this.screenSubscription.unsubscribe();
  }
}
