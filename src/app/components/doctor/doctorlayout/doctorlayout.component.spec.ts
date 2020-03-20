import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorlayoutComponent } from './doctorlayout.component';

describe('DoctorlayoutComponent', () => {
  let component: DoctorlayoutComponent;
  let fixture: ComponentFixture<DoctorlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
