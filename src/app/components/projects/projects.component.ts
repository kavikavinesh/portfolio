import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { marked } from 'marked';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { PROJECTS } from '../../data/portfolio-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CardModule, ChipModule, RevealOnScrollDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  readonly projects = PROJECTS;
  /** Rendered README HTML keyed by readmeUrl; 'error' marks a failed fetch. */
  readonly readmes = signal<Record<string, string>>({});

  ngOnInit(): void {
    for (const project of this.projects) {
      if (project.readmeUrl) this.loadReadme(project.readmeUrl);
    }
  }

  openRepo(url?: string): void {
    if (url) window.open(url, '_blank', 'noopener');
  }

  private async loadReadme(url: string): Promise<void> {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(String(res.status));
      const html = await marked.parse(await res.text(), { breaks: true });
      this.readmes.update(m => ({ ...m, [url]: html }));
    } catch {
      this.readmes.update(m => ({ ...m, [url]: 'error' }));
    }
  }
}
