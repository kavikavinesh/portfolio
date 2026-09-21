import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { CERTIFICATIONS, CERT_STATS, DOWNLOADS } from '../../data/portfolio-data';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, ButtonModule, TagModule, RevealOnScrollDirective],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {
  readonly certifications = CERTIFICATIONS;
  readonly stats = CERT_STATS;
  readonly downloads = DOWNLOADS;
}
