import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopWayComponent } from './stop-way.component';

describe('StopWayComponent', () => {
  let component: StopWayComponent;
  let fixture: ComponentFixture<StopWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopWayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
