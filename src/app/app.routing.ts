import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeddingDetailsComponent } from './wedding-details/wedding-details.component';
import { HeroComponent } from './hero/hero.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { TravelComponent } from './travel/travel.component';
import { PortlandComponent} from './portland/portland.component';
import { RegistryComponent } from './registry/registry.component';
import { AttendingComponent } from './attending/attending.component';
import { SigninComponent } from './signin/signin.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoffComponent } from './logoff/logoff.component';
import { RegisteredComponent } from './registered/registered.component';

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
  },
  {
    path: 'registry',
    component: RegistryComponent
  },
  {
    path: 'attending',
    component: AttendingComponent
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "logoff",
    component: LogoffComponent
  },
  {
    path: "registered",
    component: RegisteredComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
