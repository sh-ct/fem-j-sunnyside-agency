import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ICtaRow } from "../../models/data.model";
import { CtaService } from "../cta.service";

@Component({
  selector: 'app-cta-row',
  templateUrl: './cta-row.component.html',
  styleUrls: ['./cta-row.component.scss'],
  styles: [
    `@media only screen and (min-width: 600px) {
      .reversed {
        flex-direction: row-reverse;
      }
    }`
  ]
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
