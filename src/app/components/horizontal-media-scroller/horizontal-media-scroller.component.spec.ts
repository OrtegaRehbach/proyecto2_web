import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalMediaScrollerComponent } from './horizontal-media-scroller.component';

describe('HorizontalMediaScrollerComponent', () => {
  let component: HorizontalMediaScrollerComponent;
  let fixture: ComponentFixture<HorizontalMediaScrollerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontalMediaScrollerComponent]
    });
    fixture = TestBed.createComponent(HorizontalMediaScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
