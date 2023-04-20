import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendManagerCreateComponent } from './friend-manager-create.component';

describe('FriendManagerCreateComponent', () => {
  let component: FriendManagerCreateComponent;
  let fixture: ComponentFixture<FriendManagerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendManagerCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendManagerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
