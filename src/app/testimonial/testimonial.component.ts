import { Component, Input } from '@angular/core';
import { ITestimonial } from "../models/data.model";

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {

  @Input() data: ITestimonial;

  get imageUrl(): string {
    return `../../assets/images/${this.data.image}`;
  }

}
