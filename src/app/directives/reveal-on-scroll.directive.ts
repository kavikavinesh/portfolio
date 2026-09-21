import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  AfterViewInit,
  inject
} from '@angular/core';

/**
 * Lightweight scroll-reveal directive — no external animation
 * library needed. Adds `is-visible` once the host enters the
 * viewport; pair with the `[data-reveal]` styles in styles.scss.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: {
    '[attr.data-reveal]': "''",
    '[attr.data-reveal-delay]': 'delay'
  }
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input('appReveal') delay: string | number = '';

  private el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.el.nativeElement.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
