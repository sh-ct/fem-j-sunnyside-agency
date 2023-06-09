import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaImageComponent } from './cta-image.component';

describe('CtaImageComponent', () => {
  let component: CtaImageComponent;
  let fixture: ComponentFixture<CtaImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
