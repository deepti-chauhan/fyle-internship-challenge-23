import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernotfoundComponent } from './usernotfound.component';

describe('UsernotfoundComponent', () => {
  let component: UsernotfoundComponent;
  let fixture: ComponentFixture<UsernotfoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsernotfoundComponent]
    });
    fixture = TestBed.createComponent(UsernotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
