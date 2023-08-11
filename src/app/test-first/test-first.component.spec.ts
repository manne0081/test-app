import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFirstComponent } from './test-first.component';

describe('TestFirstComponent', () => {
  let component: TestFirstComponent;
  let fixture: ComponentFixture<TestFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestFirstComponent]
    });
    fixture = TestBed.createComponent(TestFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
