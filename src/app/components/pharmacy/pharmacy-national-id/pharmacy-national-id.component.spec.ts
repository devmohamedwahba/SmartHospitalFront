import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyNationalIdComponent } from './pharmacy-national-id.component';

describe('PharmacyNationalIdComponent', () => {
  let component: PharmacyNationalIdComponent;
  let fixture: ComponentFixture<PharmacyNationalIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyNationalIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyNationalIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
