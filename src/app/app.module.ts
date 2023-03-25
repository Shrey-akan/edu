import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TalentComponent } from './talent/talent.component';
import { MittsureComponent } from './mittsure/mittsure.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FeaturesComponent } from './features/features.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { DigitalComponent } from './digital/digital.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TalentComponent,
    MittsureComponent,
    GalleryComponent,
    FeaturesComponent,
    ErrorComponent,
    LoginComponent,
    ContactComponent,
    DigitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
