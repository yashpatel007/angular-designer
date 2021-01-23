import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCarousalComponent } from './text-carousal.component';

describe('TextCarousalComponent', () => {
  let component: TextCarousalComponent;
  let fixture: ComponentFixture<TextCarousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextCarousalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
