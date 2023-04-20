import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendManagerDetailsComponent } from './friend-manager-details.component';

describe('FriendManagerDetailsComponent', () => {
  let component: FriendManagerDetailsComponent;
  let fixture: ComponentFixture<FriendManagerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendManagerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendManagerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
