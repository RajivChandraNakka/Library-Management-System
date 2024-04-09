import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmoduleComponent } from './adminmodule.component';

describe('AdminmoduleComponent', () => {
  let component: AdminmoduleComponent;
  let fixture: ComponentFixture<AdminmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
