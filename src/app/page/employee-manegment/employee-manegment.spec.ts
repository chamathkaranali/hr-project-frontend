import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManegment } from './employee-manegment';

describe('EmployeeManegment', () => {
  let component: EmployeeManegment;
  let fixture: ComponentFixture<EmployeeManegment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeManegment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeManegment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
