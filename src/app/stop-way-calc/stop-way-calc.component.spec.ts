import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopWayCalcComponent } from './stop-way-calc.component';

describe('StopWayCalcComponent', () => {
  let component: StopWayCalcComponent;
  let fixture: ComponentFixture<StopWayCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopWayCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopWayCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
