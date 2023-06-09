import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ICtaRow } from "../../data.model";
import { CtaService } from "./cta.service";

@Component({
  selector: 'app-cta-row',
  styles: [
    `@media only screen and (min-width: 600px) {
      .reversed {
        flex-direction: row-reverse;
      }
    }`
  ],
  template: `
    <section #row class="flex flex-wrap sm:flex-nowrap">

      <picture class="flex-fluid-split">
        <source [srcset]="desktopImageUrl" media="(min-width: 600px)">
        <img [src]="mobileImageUrl" [alt]="data.alt" class="w-full">
      </picture>

      <div class="flex-fluid-split text-neutral-900 py-8 px-8 c text-center [&>*]:my-6 sm:flex sm:flex-col sm:justify-center sm:text-left xl:pl-[8rem] xl:pr-20 2xl:pr-[13rem]">
        <h2 class="font-serif font-boldest leading-8 px-4 text-[1.5rem] sm:p-0 xl:text-[2.75rem] xl:pr-16 xl:leading-[2.75rem]">
          {{ data.title }}
        </h2>
        <p class="text-neutral-800 text-md xl:text-xl">{{ data.description }}</p>
        <p class="font-serif font-boldest text-sm relative">
          <a [href]="data.url" class="relative [&>mark]:hover:opacity-100 [&>mark]:focus-visible:opacity-100">
            <mark [style.background-color]="data.highlight" class="absolute transition duration-300 opacity-20 -left-1 -right-1 bottom-0 h-2 -z-10 rounded-full"></mark>
            LEARN MORE
          </a>
        </p>
      </div>

    </section>
  `
})
export class CtaRowComponent implements AfterViewInit {

  @Input() data: ICtaRow;
  @Input() reverse: boolean;
  @ViewChild('row') row: ElementRef;

  constructor(private ctaService: CtaService) {
  }

  get mobileImageUrl(): string {
    return this.ctaService.getMobileImageUrl(this.data.image);
  }

  get desktopImageUrl(): string {
    return this.ctaService.getDesktopImageUrl(this.data.image);
  }

  ngAfterViewInit() {
    if (this.row) {
      if (this.reverse) {
        this.row.nativeElement.classList.add('reversed');
      } else {
        this.row.nativeElement.classList.remove('reversed');
      }
    }
  }

}
