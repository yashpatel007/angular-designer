import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithimageComponent } from './login-withimage.component';

describe('LoginWithimageComponent', () => {
  let component: LoginWithimageComponent;
  let fixture: ComponentFixture<LoginWithimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWithimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
