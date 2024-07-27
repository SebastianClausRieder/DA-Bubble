import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCreateAccountComponent } from './login-create-account.component';

describe('LoginCreateAccountComponent', () => {
  let component: LoginCreateAccountComponent;
  let fixture: ComponentFixture<LoginCreateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCreateAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
