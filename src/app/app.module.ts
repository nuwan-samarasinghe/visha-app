import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppReadMoreComponent } from './components/home/app-read-more/app-read-more.component';
import { CareersComponent } from './components/careers/careers.component';
import { ClientSectionComponent } from './shared/client-section/client-section.component';
import {AgmCoreModule} from '@agm/core';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxCaptchaModule} from "ngx-captcha";
import {HttpClientModule} from "@angular/common/http";
import { CareersEmptyComponent } from './components/careers-empty/careers-empty.component';
import { ProjectsEmptyComponent } from './components/projects-empty/projects-empty.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PricingComponent,
    GalleryComponent,
    ContactComponent,
    ServiceComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    AppReadMoreComponent,
    CareersComponent,
    ClientSectionComponent,
    CareersEmptyComponent,
    ProjectsEmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAk9nDfZXUGoPvUtURDXNfeu7SIsVwMXOs'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
