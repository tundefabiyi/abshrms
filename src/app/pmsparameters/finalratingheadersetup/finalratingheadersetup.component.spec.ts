import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalratingheadersetupComponent } from './finalratingheadersetup.component';

describe('FinalratingheadersetupComponent', () => {
  let component: FinalratingheadersetupComponent;
  let fixture: ComponentFixture<FinalratingheadersetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalratingheadersetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalratingheadersetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
