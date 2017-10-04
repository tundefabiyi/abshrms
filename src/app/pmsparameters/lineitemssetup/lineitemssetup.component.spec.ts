import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineitemssetupComponent } from './lineitemssetup.component';

describe('LineitemssetupComponent', () => {
  let component: LineitemssetupComponent;
  let fixture: ComponentFixture<LineitemssetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineitemssetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineitemssetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
