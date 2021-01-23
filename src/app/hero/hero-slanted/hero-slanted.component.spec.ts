import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSlantedComponent } from './hero-slanted.component';

describe('HeroSlantedComponent', () => {
  let component: HeroSlantedComponent;
  let fixture: ComponentFixture<HeroSlantedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSlantedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSlantedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
