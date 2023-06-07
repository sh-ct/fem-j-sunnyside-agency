import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-gallery-row',
  template: `
    <div class="flex flex-wrap">
      <picture class="flex-grow flex-shrink basis-1/2 sm:basis-1/4" *ngFor="let image of images">
        <source [srcset]="getDesktopImageUrl(image)" media="(min-width: 600px)">
        <img [src]="getMobileImageUrl(image)" alt="">
      </picture>
    </div>
  `
})
export class ImageGalleryRowComponent {

  @Input() images: string[];

  getMobileImageUrl(image: string): string {
    return `../../assets/images/mobile/${image}`;
  }

  getDesktopImageUrl(image: string): string {
    return `../../assets/images/desktop/${image}`;
  }

}
