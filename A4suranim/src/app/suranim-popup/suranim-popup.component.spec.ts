import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuranimPopupComponent } from './suranim-popup.component';

describe('SuranimPopupComponent', () => {
  let component: SuranimPopupComponent;
  let fixture: ComponentFixture<SuranimPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuranimPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuranimPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
