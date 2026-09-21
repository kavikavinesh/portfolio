import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { MessageService } from 'primeng/api';
import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';

// Custom preset: extends Aura with the portfolio's signature
// navy + gold palette, pulled from the hero photography (gilded
// temple doors + navy shirt) so the UI and the imagery read as one system.
const KavineshPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fdf8ec',
      100: '#faedc7',
      200: '#f5da8f',
      300: '#efc257',
      400: '#e9ac3a',
      500: '#e3b23c',
      600: '#c4922a',
      700: '#9c7220',
      800: '#7a591c',
      900: '#5c431a',
      950: '#33240c'
    },
    colorScheme: {
      dark: {
        surface: {
          0: '#ffffff',
          50: '#f3f4f8',
          100: '#e3e5ee',
          200: '#c3c7d9',
          300: '#9a9fbd',
          400: '#6b7093',
          500: '#454a6e',
          600: '#2e3252',
          700: '#1c1f38',
          800: '#131629',
          900: '#0c0e1c',
          950: '#070912'
        }
      }
    }
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: KavineshPreset,
        options: {
          darkModeSelector: '.app-dark',
          cssLayer: {
            name: 'primeng',
            order: 'reset, primeng'
          }
        }
      },
      ripple: true
    }),
    MessageService
  ]
};
