import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsGuidelinesComponent } from './authors-guidelines.component';

describe('AuthorsGuidelinesComponent', () => {
  let component: AuthorsGuidelinesComponent;
  let fixture: ComponentFixture<AuthorsGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsGuidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
