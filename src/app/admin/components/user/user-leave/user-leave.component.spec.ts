import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLeaveComponent } from './user-leave.component';

describe('UserLeaveComponent', () => {
  let component: UserLeaveComponent;
  let fixture: ComponentFixture<UserLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLeaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
