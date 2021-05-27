import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectComponent } from './components/project/project.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppReadMoreComponent } from './components/home/app-read-more/app-read-more.component';
import { CareersComponent } from './components/careers/careers.component';
import { ClientSectionComponent } from './shared/client-section/client-section.component';
import {AgmCoreModule} from '@agm/core';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxCaptchaModule} from "ngx-captcha";
import {HttpClientModule} from "@angular/common/http";
import { CareersEmptyComponent } from './components/careers-empty/careers-empty.component';
import { ProjectsEmptyComponent } from './components/projects-empty/projects-empty.component';
import { SingleHomeComponent } from './components/project-details/single-home/single-home.component';
import { HighriseBuildingComponent } from './components/project-details/highrise-building/highrise-building.component';
import { HotelsComponent } from './components/project-details/hotels/hotels.component';
import { HealthcareFacilitiesComponent } from './components/project-details/healthcare-facilities/healthcare-facilities.component';
import { CommercialAndGovernmentComponent } from './components/project-details/commercial-and-government/commercial-and-government.component';
import { MultiResidenceDevelopmentComponent } from './components/project-details/multi-residence-development/multi-residence-development.component';
import { SchoolsComponent } from './components/project-details/schools/schools.component';
import { WarehouseConstructionComponent } from './components/project-details/warehouse-construction/warehouse-construction.component';
import { ChurchesAndCemeteriesComponent } from './components/project-details/churches-and-cemeteries/churches-and-cemeteries.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectComponent,
    GalleryComponent,
    ContactComponent,
    ServiceComponent,
    HeaderComponent,
    FooterComponent,
    AppReadMoreComponent,
    CareersComponent,
    ClientSectionComponent,
    CareersEmptyComponent,
    ProjectsEmptyComponent,
    SingleHomeComponent,
    HighriseBuildingComponent,
    HotelsComponent,
    HealthcareFacilitiesComponent,
    CommercialAndGovernmentComponent,
    MultiResidenceDevelopmentComponent,
    SchoolsComponent,
    WarehouseConstructionComponent,
    ChurchesAndCemeteriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAk9nDfZXUGoPvUtURDXNfeu7SIsVwMXOs'
    }),
    ReactiveFormsModule,
    NgxCaptchaModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
