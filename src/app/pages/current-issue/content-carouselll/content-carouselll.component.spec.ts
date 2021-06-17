import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCarouselllComponent } from './content-carouselll.component';

describe('ContentCarousellComponent', () => {
  let component: ContentCarouselllComponent;
  let fixture: ComponentFixture<ContentCarouselllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCarouselllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCarouselllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
