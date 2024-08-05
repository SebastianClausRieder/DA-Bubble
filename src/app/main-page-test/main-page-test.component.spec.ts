import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageTestComponent } from './main-page-test.component';

describe('MainPageTestComponent', () => {
  let component: MainPageTestComponent;
  let fixture: ComponentFixture<MainPageTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPageTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
