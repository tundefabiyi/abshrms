import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencymeasurementComponent } from './competencymeasurement.component';

describe('CompetencymeasurementComponent', () => {
  let component: CompetencymeasurementComponent;
  let fixture: ComponentFixture<CompetencymeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencymeasurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencymeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
