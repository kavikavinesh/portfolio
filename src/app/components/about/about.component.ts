import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { PROFILE, EDUCATION } from '../../data/portfolio-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, DividerModule, RevealOnScrollDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly profile = PROFILE;
  readonly education = EDUCATION;
  readonly aboutImage = 'assets/images/about-portrait.jpg';
}
