import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenschutzrichtlinienComponent } from './datenschutzrichtlinien.component';

describe('DatenschutzrichtlinienComponent', () => {
  let component: DatenschutzrichtlinienComponent;
  let fixture: ComponentFixture<DatenschutzrichtlinienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatenschutzrichtlinienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatenschutzrichtlinienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
