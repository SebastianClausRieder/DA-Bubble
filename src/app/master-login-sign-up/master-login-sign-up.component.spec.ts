import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterLoginSignUpComponent } from './master-login-sign-up.component';

describe('MasterLoginSignUpComponent', () => {
  let component: MasterLoginSignUpComponent;
  let fixture: ComponentFixture<MasterLoginSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterLoginSignUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterLoginSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
