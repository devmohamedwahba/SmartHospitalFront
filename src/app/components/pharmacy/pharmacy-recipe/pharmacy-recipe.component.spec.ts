import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyRecipeComponent } from './pharmacy-recipe.component';

describe('PharmacyRecipeComponent', () => {
  let component: PharmacyRecipeComponent;
  let fixture: ComponentFixture<PharmacyRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
