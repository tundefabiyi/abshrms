import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisaldetailsComponent } from './appraisaldetails.component';

describe('AppraisaldetailsComponent', () => {
  let component: AppraisaldetailsComponent;
  let fixture: ComponentFixture<AppraisaldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisaldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
