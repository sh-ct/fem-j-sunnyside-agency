import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CtaService {

  imageDirectory = '../../../assets/images/';

  constructor() { }

  getMobileImageUrl(filename: string): string {
    return this.constructImageUrl('mobile', filename);
  }

  getDesktopImageUrl(filename: string): string {
    return this.constructImageUrl('desktop', filename);
  }

  private constructImageUrl(format: 'desktop'|'mobile', filename: string) {
    return `${this.imageDirectory}/${format}/${filename}`;
  }
}
