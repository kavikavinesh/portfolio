import {
  AfterViewInit,
  Component,
  HostListener,
  OnDestroy,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { NAV_LINKS, PROFILE, DOWNLOADS } from '../../data/portfolio-data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  readonly links = NAV_LINKS;
  readonly profile = PROFILE;
  readonly downloads = DOWNLOADS;

  scrolled = signal(false);
  menuOpen = signal(false);
  activeFragment = signal('home');

  private observer?: IntersectionObserver;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  ngAfterViewInit(): void {
    const sections = this.links
      .map((l) => document.getElementById(l.fragment))
      .filter((el): el is HTMLElement => !!el);

    if (typeof IntersectionObserver === 'undefined' || !sections.length) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          this.activeFragment.set(visible.target.id);
        }
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.05, 0.2, 0.5] }
    );

    sections.forEach((s) => this.observer!.observe(s));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
