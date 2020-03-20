import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacySideBarComponent } from './pharmacy-side-bar.component';

describe('PharmacySideBarComponent', () => {
  let component: PharmacySideBarComponent;
  let fixture: ComponentFixture<PharmacySideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacySideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacySideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
