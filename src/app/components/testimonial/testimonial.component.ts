import { Component, Input } from '@angular/core';
import { ITestimonial } from "../../data.model";

@Component({
  selector: 'app-testimonial',
  template: `
    <article class="flex flex-col items-center text-center gap-6 py-6 [&:first-child]:pt-0">
      <img class="rounded-full w-16" [src]="imageUrl" alt="">

      <p class="px-6 text-neutral-800 lg:w-[23rem]">
        {{ data.bio }}
      </p>

      <p class="text-neutral-600 text-sm">
        <span class="block text-neutral-900 font-boldest font-serif text-xl mb-1">
          {{ data.name }}
        </span>

        {{ data.role }}
      </p>

    </article>
  `
})
export class TestimonialComponent {

  @Input() data: ITestimonial;

  get imageUrl(): string {
    return `assets/images/${this.data.image}`;
  }

}
