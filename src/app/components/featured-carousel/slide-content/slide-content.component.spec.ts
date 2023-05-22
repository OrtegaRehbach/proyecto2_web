import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideContentComponent } from './slide-content.component';

describe('SlideContentComponent', () => {
  let component: SlideContentComponent;
  let fixture: ComponentFixture<SlideContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideContentComponent]
    });
    fixture = TestBed.createComponent(SlideContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
