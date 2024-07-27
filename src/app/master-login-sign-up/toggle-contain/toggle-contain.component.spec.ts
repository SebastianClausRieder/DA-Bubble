import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleContainComponent } from './toggle-contain.component';

describe('ToggleContainComponent', () => {
  let component: ToggleContainComponent;
  let fixture: ComponentFixture<ToggleContainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleContainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleContainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
