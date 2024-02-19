import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowupComponent } from './arrowup.component';

describe('ArrowupComponent', () => {
  let component: ArrowupComponent;
  let fixture: ComponentFixture<ArrowupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrowupComponent]
    });
    fixture = TestBed.createComponent(ArrowupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});