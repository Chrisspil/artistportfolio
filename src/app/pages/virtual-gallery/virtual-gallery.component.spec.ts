import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualGalleryComponent } from './virtual-gallery.component';

describe('VirtualGalleryComponent', () => {
  let component: VirtualGalleryComponent;
  let fixture: ComponentFixture<VirtualGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
