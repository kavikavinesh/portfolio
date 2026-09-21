import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { PROFILE, DOWNLOADS } from '../../data/portfolio-data';

interface ContactChannel {
  label: string;
  value: string;
  href: string;
  icon: string;
  copyable?: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ButtonModule, RevealOnScrollDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly profile = PROFILE;
  readonly downloads = DOWNLOADS;

  private messageService = inject(MessageService);

  readonly channels: ContactChannel[] = [
    {
      label: 'Email',
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
      icon: 'pi pi-envelope',
      copyable: true
    },
    {
      label: 'Phone',
      value: PROFILE.phone,
      href: `tel:${PROFILE.phone.replace(/\s+/g, '')}`,
      icon: 'pi pi-phone'
    },
    {
      label: 'LinkedIn',
      value: PROFILE.linkedinLabel,
      href: PROFILE.linkedin,
      icon: 'pi pi-linkedin'
    },
    {
      label: 'GitHub',
      value: PROFILE.githubLabel,
      href: PROFILE.github,
      icon: 'pi pi-github'
    }
  ];

  async copy(value: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(value);
      this.messageService.add({
        severity: 'success',
        summary: 'Copied',
        detail: `${value} copied to clipboard`,
        life: 2500
      });
    } catch {
      this.messageService.add({
        severity: 'info',
        summary: value,
        life: 3000
      });
    }
  }
}
