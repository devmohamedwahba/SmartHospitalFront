import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugEditComponent } from './drug-edit.component';

describe('DrugEditComponent', () => {
  let component: DrugEditComponent;
  let fixture: ComponentFixture<DrugEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
