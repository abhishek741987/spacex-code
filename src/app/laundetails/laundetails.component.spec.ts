import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaundetailsComponent } from './laundetails.component';

describe('LaundetailsComponent', () => {
  let component: LaundetailsComponent;
  let fixture: ComponentFixture<LaundetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaundetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaundetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
