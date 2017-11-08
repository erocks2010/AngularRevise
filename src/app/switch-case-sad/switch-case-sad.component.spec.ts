import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCaseSadComponent } from './switch-case-sad.component';

describe('SwitchCaseSadComponent', () => {
  let component: SwitchCaseSadComponent;
  let fixture: ComponentFixture<SwitchCaseSadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchCaseSadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchCaseSadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
