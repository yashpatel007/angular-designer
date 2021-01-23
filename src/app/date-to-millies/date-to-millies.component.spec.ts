import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateToMilliesComponent } from './date-to-millies.component';

describe('DateToMilliesComponent', () => {
  let component: DateToMilliesComponent;
  let fixture: ComponentFixture<DateToMilliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateToMilliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateToMilliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
