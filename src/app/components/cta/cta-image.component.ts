import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ICtaImage } from "../../data.model";
import { CtaService } from "./cta.service";

@Component({
  selector: 'app-cta-image',
  template: `
    <section #cta class="relative">

      <picture>
        <source [srcset]="desktopImageUrl" media="(min-width: 600px)">
        <img class="w-full" [src]="mobileImageUrl" [alt]="data.alt">
      </picture>

      <div class="absolute text-center bottom-16 px-4">
        <div class="flex flex-col gap-6 items-center">
          <h2 class="font-serif text-2xl xl:text-[2rem] font-boldest">{{ data.title }}</h2>
          <p class="sm:w-7/10 xl:w-3/5 xl:text-xl">{{ data.description }}</p>
        </div>
      </div>

    </section>
  `
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
