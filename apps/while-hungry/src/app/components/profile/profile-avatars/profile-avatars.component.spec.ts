import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAvatarsComponent } from './profile-avatars.component';

describe('ProfileAvatarsComponent', () => {
  let component: ProfileAvatarsComponent;
  let fixture: ComponentFixture<ProfileAvatarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAvatarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAvatarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
