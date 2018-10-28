import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdireactiveComponent } from './testdireactive.component';

describe('TestdireactiveComponent', () => {
  let component: TestdireactiveComponent;
  let fixture: ComponentFixture<TestdireactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdireactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdireactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
