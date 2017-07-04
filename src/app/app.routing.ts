import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeddingDetailsComponent } from './wedding-details/wedding-details.component';
import { HeroComponent } from './hero/hero.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { TravelComponent } from './travel/travel.component';
import { PortlandComponent} from './portland/portland.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HeroComponent
  },
  {
    path: 'wedding-details',
    component: WeddingDetailsComponent
  },
  {
    path: 'rsvp',
    component: RsvpComponent
  },
  {
    path: 'travel',
    component: TravelComponent
  },
  {
    path: 'portland',
    component: PortlandComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
