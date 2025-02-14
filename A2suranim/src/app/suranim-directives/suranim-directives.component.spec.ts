import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuranimDirectivesComponent } from './suranim-directives.component';

describe('SuranimDirectivesComponent', () => {
  let component: SuranimDirectivesComponent;
  let fixture: ComponentFixture<SuranimDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuranimDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuranimDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
