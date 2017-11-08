import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCaseDefaultComponent } from './switch-case-default.component';

describe('SwitchCaseDefaultComponent', () => {
  let component: SwitchCaseDefaultComponent;
  let fixture: ComponentFixture<SwitchCaseDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchCaseDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchCaseDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
