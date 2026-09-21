import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { PROJECTS } from '../../data/portfolio-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CardModule, ChipModule, RevealOnScrollDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
}
