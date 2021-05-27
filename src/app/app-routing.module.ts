import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {ProjectComponent} from './components/project/project.component';
import {ServiceComponent} from './components/service/service.component';
import {CareersComponent} from "./components/careers/careers.component";
import {CareersEmptyComponent} from "./components/careers-empty/careers-empty.component";
import {ProjectsEmptyComponent} from "./components/projects-empty/projects-empty.component";
import {SingleHomeComponent} from "./components/project-details/single-home/single-home.component";
import {HighriseBuildingComponent} from "./components/project-details/highrise-building/highrise-building.component";
import {HotelsComponent} from "./components/project-details/hotels/hotels.component";
import {HealthcareFacilitiesComponent} from "./components/project-details/healthcare-facilities/healthcare-facilities.component";
import {CommercialAndGovernmentComponent} from "./components/project-details/commercial-and-government/commercial-and-government.component";
import {MultiResidenceDevelopmentComponent} from "./components/project-details/multi-residence-development/multi-residence-development.component";
import {SchoolsComponent} from "./components/project-details/schools/schools.component";
import {WarehouseConstructionComponent} from "./components/project-details/warehouse-construction/warehouse-construction.component";
import {ChurchesAndCemeteriesComponent} from "./components/project-details/churches-and-cemeteries/churches-and-cemeteries.component";

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
  {path: 'projects', component: ProjectComponent},
  {path: 'single-home', component: SingleHomeComponent},
  {path: 'highrise-building', component: HighriseBuildingComponent},
  {path: 'hotels', component: HotelsComponent},
  {path: 'healthcare-facilities', component: HealthcareFacilitiesComponent},
  {path: 'commercial-and-government', component: CommercialAndGovernmentComponent},
  {path: 'multi-residence-development', component: MultiResidenceDevelopmentComponent},
  {path: 'schools', component: SchoolsComponent},
  {path: 'warehouse-construction', component: WarehouseConstructionComponent},
  {path: 'churches-and-cemeteries', component: ChurchesAndCemeteriesComponent},
  //{path: 'projects', component: ProjectsEmptyComponent},
  {path: 'services', component: ServiceComponent},
  {path: 'careers', component: CareersComponent},
  //{path: 'careers', component: CareersEmptyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
