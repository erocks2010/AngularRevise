import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCaseHappyComponent } from './switch-case-happy.component';

describe('SwitchCaseHappyComponent', () => {
  let component: SwitchCaseHappyComponent;
  let fixture: ComponentFixture<SwitchCaseHappyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchCaseHappyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchCaseHappyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
