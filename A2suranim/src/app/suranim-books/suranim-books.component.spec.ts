import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuranimBooksComponent } from './suranim-books.component';

describe('SuranimBooksComponent', () => {
  let component: SuranimBooksComponent;
  let fixture: ComponentFixture<SuranimBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuranimBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuranimBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
