import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipModule } from 'primeng/chip';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { SKILL_GROUPS } from '../../data/portfolio-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ChipModule, RevealOnScrollDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  readonly groups = SKILL_GROUPS;
}
