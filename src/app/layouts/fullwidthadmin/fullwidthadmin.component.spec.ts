import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullwidthadminComponent } from './fullwidthadmin.component';

describe('FullwidthadminComponent', () => {
  let component: FullwidthadminComponent;
  let fixture: ComponentFixture<FullwidthadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullwidthadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullwidthadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
