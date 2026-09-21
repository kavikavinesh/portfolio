import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { EXPERIENCE } from '../../data/portfolio-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TagModule, RevealOnScrollDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  readonly experience = EXPERIENCE;
}
