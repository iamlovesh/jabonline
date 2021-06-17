import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineFirstComponent } from './online-first.component';

describe('OnlineFirstComponent', () => {
  let component: OnlineFirstComponent;
  let fixture: ComponentFixture<OnlineFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
