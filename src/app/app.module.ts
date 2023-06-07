import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { CtaRowComponent } from './components/cta/cta-row.component';
import { CtaImageComponent } from './components/cta/cta-image.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ImageGalleryRowComponent } from './components/image-gallery-row/image-gallery-row.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    CtaRowComponent,
    CtaImageComponent,
    TestimonialComponent,
    ImageGalleryRowComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
