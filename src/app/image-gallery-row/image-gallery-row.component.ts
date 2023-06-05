import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-gallery-row',
  templateUrl: './image-gallery-row.component.html',
  styleUrls: ['./image-gallery-row.component.scss']
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
