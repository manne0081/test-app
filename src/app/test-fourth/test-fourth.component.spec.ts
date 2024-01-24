import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFourthComponent } from './test-fourth.component';

describe('TestFourthComponent', () => {
  let component: TestFourthComponent;
  let fixture: ComponentFixture<TestFourthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestFourthComponent]
    });
    fixture = TestBed.createComponent(TestFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
