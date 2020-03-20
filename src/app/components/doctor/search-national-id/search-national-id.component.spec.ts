import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNationalIdComponent } from './search-national-id.component';

describe('SearchNationalIdComponent', () => {
  let component: SearchNationalIdComponent;
  let fixture: ComponentFixture<SearchNationalIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNationalIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNationalIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
