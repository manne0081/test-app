import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestThirdComponent } from './test-third.component';

describe('TestThirdComponent', () => {
  let component: TestThirdComponent;
  let fixture: ComponentFixture<TestThirdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestThirdComponent]
    });
    fixture = TestBed.createComponent(TestThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
