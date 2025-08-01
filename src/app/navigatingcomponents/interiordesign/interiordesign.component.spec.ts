import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriordesignComponent } from './interiordesign.component';

describe('InteriordesignComponent', () => {
  let component: InteriordesignComponent;
  let fixture: ComponentFixture<InteriordesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InteriordesignComponent]
    });
    fixture = TestBed.createComponent(InteriordesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
