import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacySearchComponent } from './pharmacy-search.component';

describe('PharmacySearchComponent', () => {
  let component: PharmacySearchComponent;
  let fixture: ComponentFixture<PharmacySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
