import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyLeftCardComponent } from './sticky-left-card.component';

describe('StickyLeftCardComponent', () => {
  let component: StickyLeftCardComponent;
  let fixture: ComponentFixture<StickyLeftCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyLeftCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyLeftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
