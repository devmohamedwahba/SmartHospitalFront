import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsidebarComponent } from './doctorsidebar.component';

describe('DoctorsidebarComponent', () => {
  let component: DoctorsidebarComponent;
  let fixture: ComponentFixture<DoctorsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
