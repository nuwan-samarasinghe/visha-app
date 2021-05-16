import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {PricingComponent} from './components/pricing/pricing.component';
import {ServiceComponent} from './components/service/service.component';
import {CareersComponent} from "./components/careers/careers.component";
import {CareersEmptyComponent} from "./components/careers-empty/careers-empty.component";
import {ProjectsEmptyComponent} from "./components/projects-empty/projects-empty.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {path: 'about-us', component: AboutComponent},
  {path: 'contact-us', component: ContactComponent},
  {path: 'gallery', component: GalleryComponent},
  // {path: 'projects', component: PricingComponent},
  {path: 'projects', component: ProjectsEmptyComponent},
  {path: 'services', component: ServiceComponent},
  // {path: 'careers', component: CareersComponent},
  {path: 'careers', component: CareersEmptyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
