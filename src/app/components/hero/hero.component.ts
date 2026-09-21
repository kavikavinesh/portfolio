import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { PROFILE, DOWNLOADS } from '../../data/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonModule, TagModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  readonly profile = PROFILE;
  readonly downloads = DOWNLOADS;
  readonly heroImage = 'assets/images/hero-portrait.jpg';

  readonly roleWords = ['.NET & Angular Engineer', 'Cloud & Security Focused', 'AI Engineer in the making'];
}
