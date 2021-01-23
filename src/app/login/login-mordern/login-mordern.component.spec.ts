import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMordernComponent } from './login-mordern.component';

describe('LoginMordernComponent', () => {
  let component: LoginMordernComponent;
  let fixture: ComponentFixture<LoginMordernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginMordernComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMordernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
