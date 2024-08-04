import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartLogoComponent } from './start-logo.component';

describe('StartLogoComponent', () => {
  let component: StartLogoComponent;
  let fixture: ComponentFixture<StartLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
