import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSecondComponent } from './test-second.component';

describe('TestSecondComponent', () => {
  let component: TestSecondComponent;
  let fixture: ComponentFixture<TestSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestSecondComponent]
    });
    fixture = TestBed.createComponent(TestSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
