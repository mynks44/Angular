import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSuranimComponent } from './header-suranim.component';

describe('HeaderSuranimComponent', () => {
  let component: HeaderSuranimComponent;
  let fixture: ComponentFixture<HeaderSuranimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSuranimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSuranimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
