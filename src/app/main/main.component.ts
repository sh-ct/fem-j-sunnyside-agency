import { Component } from '@angular/core';
import jsonData from '../../assets/data.json';
import { IData } from "../data.model";

@Component({
  selector: 'app-main',
  template: `
      <h2 class="absolute w-full text-[2.25rem] sm:text-[3.5rem] leading-[2.5rem] tracking-widest text-center top-[10rem] text-white  font-serif font-boldest">
          WE ARE CREATIVES
      </h2>

      <div class="absolute flex w-full justify-center top-[18rem] sm:top-[22rem]">
          <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 3v100M3 95.484l15 15 15-15"/>
              </g>
          </svg>
      </div>

      <picture>
          <source srcset="../../assets/images/desktop/image-header.jpg" media="(min-width: 600px)">
          <img src="../../assets/images/mobile/image-header.jpg" alt="Semicircle image of an orange slice on a bright blue background">
      </picture>

      <app-cta-row *ngFor="let ctaRow of data.ctaRows" [data]="ctaRow" [reverse]="ctaRow.reverse"></app-cta-row>

      <section class="flex flex-wrap sm:flex-nowrap">
          <app-cta-image class="flex-fluid-split" *ngFor="let ctaImage of data.ctaImages" [data]="ctaImage"></app-cta-image>
      </section>

      <section class="pt-12 pb-20">
          <h2 class="font-serif font-bold tracking-[2.5px] text-neutral-600 text-l text-center m-12">CLIENT
              TESTIMONIALS
          </h2>
          <div class="flex flex-wrap sm:flex-nowrap lg:justify-center">
              <app-testimonial class="flex-grow basis-full lg:flex-grow-0 lg:basis-auto" *ngFor="let testimonial of data.testimonials" [data]="testimonial"></app-testimonial>
          </div>
      </section>

      <section>
          <app-image-gallery-row [images]="galleryImages"></app-image-gallery-row>
      </section>
  `
})
export class MainComponent {

  data: IData = jsonData;
  galleryImages: string[] = [
    'image-gallery-milkbottles.jpg',
    'image-gallery-orange.jpg',
    'image-gallery-cone.jpg',
    'image-gallery-sugarcubes.jpg',
  ]

}
