import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationAndProfilingComponent } from './registration-and-profiling.component';

describe('RegistrationAndProfilingComponent', () => {
  let component: RegistrationAndProfilingComponent;
  let fixture: ComponentFixture<RegistrationAndProfilingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationAndProfilingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationAndProfilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
