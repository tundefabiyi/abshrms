import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencytemplatedetailComponent } from './competencytemplatedetail.component';

describe('CompetencytemplatedetailComponent', () => {
  let component: CompetencytemplatedetailComponent;
  let fixture: ComponentFixture<CompetencytemplatedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencytemplatedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencytemplatedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
