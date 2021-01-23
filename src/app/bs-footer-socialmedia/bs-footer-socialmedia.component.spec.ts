import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsFooterSocialmediaComponent } from './bs-footer-socialmedia.component';

describe('BsFooterSocialmediaComponent', () => {
  let component: BsFooterSocialmediaComponent;
  let fixture: ComponentFixture<BsFooterSocialmediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsFooterSocialmediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsFooterSocialmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
