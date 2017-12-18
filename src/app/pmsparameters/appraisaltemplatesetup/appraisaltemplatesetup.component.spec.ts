import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisaltemplatesetupComponent } from './appraisaltemplatesetup.component';

describe('AppraisaltemplatesetupComponent', () => {
  let component: AppraisaltemplatesetupComponent;
  let fixture: ComponentFixture<AppraisaltemplatesetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisaltemplatesetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisaltemplatesetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
