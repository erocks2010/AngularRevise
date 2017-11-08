import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCaseAngryComponent } from './switch-case-angry.component';

describe('SwitchCaseAngryComponent', () => {
  let component: SwitchCaseAngryComponent;
  let fixture: ComponentFixture<SwitchCaseAngryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchCaseAngryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchCaseAngryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
