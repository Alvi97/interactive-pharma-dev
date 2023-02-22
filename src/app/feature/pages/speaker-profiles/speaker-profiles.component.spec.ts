import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerProfilesComponent } from './speaker-profiles.component';

describe('SpeakerProfilesComponent', () => {
  let component: SpeakerProfilesComponent;
  let fixture: ComponentFixture<SpeakerProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerProfilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakerProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
