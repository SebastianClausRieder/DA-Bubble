import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongPWComponent } from './strong-pw.component';

describe('StrongPWComponent', () => {
  let component: StrongPWComponent;
  let fixture: ComponentFixture<StrongPWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrongPWComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrongPWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
