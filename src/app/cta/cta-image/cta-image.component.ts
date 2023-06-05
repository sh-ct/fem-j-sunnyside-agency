import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ICtaImage } from "../../models/data.model";
import { CtaService } from "../cta.service";

@Component({
  selector: 'app-cta-image',
  templateUrl: './cta-image.component.html',
  styleUrls: ['./cta-image.component.scss']
})
export class CtaImageComponent implements AfterViewInit {

  @Input() data: ICtaImage;
  @ViewChild('cta') cta: ElementRef;

  constructor(private ctaService: CtaService) { }

  get mobileImageUrl(): string {
    return this.ctaService.getMobileImageUrl(this.data.image);
  }

  get desktopImageUrl(): string {
    return this.ctaService.getDesktopImageUrl(this.data.image);
  }

  ngAfterViewInit() {
    console.log(this.cta);
    if (this.cta) {
      this.cta.nativeElement.style.color = this.data.textColor;
    }
  }
}
