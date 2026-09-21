import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { ACHIEVEMENTS } from '../../data/portfolio-data';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, ImageModule, RevealOnScrollDirective],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})
export class AchievementsComponent {
  readonly achievements = ACHIEVEMENTS;
}
