import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeddingDetailsComponent } from './wedding-details/wedding-details.component';
import { HeroComponent } from './hero/hero.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HeroComponent
  },
  {
    path: 'wedding-details',
    component: WeddingDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
