import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestContent1Component } from './test-content1.component';

describe('TestContent1Component', () => {
  let component: TestContent1Component;
  let fixture: ComponentFixture<TestContent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestContent1Component]
    });
    fixture = TestBed.createComponent(TestContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
