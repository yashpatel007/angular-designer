import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroContentTextComponent } from './hero-content-text.component';

describe('HeroContentTextComponent', () => {
  let component: HeroContentTextComponent;
  let fixture: ComponentFixture<HeroContentTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroContentTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroContentTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
