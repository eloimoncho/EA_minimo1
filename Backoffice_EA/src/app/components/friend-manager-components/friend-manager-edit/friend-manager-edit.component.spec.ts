import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendManagerEditComponent } from './friend-manager-edit.component';

describe('FriendManagerEditComponent', () => {
  let component: FriendManagerEditComponent;
  let fixture: ComponentFixture<FriendManagerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendManagerEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendManagerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
