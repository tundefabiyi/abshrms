import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrappraisallistComponent } from './hrappraisallist.component';

describe('HrappraisallistComponent', () => {
  let component: HrappraisallistComponent;
  let fixture: ComponentFixture<HrappraisallistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrappraisallistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrappraisallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
