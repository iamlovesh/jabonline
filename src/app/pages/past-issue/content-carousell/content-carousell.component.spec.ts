import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCarousellComponent } from './content-carousell.component';

describe('ContentCarousellComponent', () => {
  let component: ContentCarousellComponent;
  let fixture: ComponentFixture<ContentCarousellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCarousellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCarousellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
