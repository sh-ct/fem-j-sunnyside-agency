import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGalleryRowComponent } from './image-gallery-row.component';

describe('ImageGalleryRowComponent', () => {
  let component: ImageGalleryRowComponent;
  let fixture: ComponentFixture<ImageGalleryRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageGalleryRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageGalleryRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
