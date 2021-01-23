import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSwapComponent } from './login-swap.component';

describe('LoginSwapComponent', () => {
  let component: LoginSwapComponent;
  let fixture: ComponentFixture<LoginSwapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSwapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
