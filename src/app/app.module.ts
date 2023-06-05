import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { CtaRowComponent } from './cta/cta-row/cta-row.component';
import { CtaImageComponent } from './cta/cta-image/cta-image.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ImageGalleryRowComponent } from './image-gallery-row/image-gallery-row.component';
import { FooterComponent } from './footer/footer.component';

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
