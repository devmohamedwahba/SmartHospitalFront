import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyLayoutComponent } from './pharmacy-layout.component';

describe('PharmacyLayoutComponent', () => {
  let component: PharmacyLayoutComponent;
  let fixture: ComponentFixture<PharmacyLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
