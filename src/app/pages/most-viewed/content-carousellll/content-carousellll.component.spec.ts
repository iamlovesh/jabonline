import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCarousellllComponent } from './content-carousellll.component';

describe('ContentCarousellllComponent', () => {
  let component: ContentCarousellllComponent;
  let fixture: ComponentFixture<ContentCarousellllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCarousellllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCarousellllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
