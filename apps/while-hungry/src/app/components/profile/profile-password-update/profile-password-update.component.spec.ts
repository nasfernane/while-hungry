import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePasswordUpdateComponent } from './profile-password-update.component';

describe('ProfilePasswordUpdateComponent', () => {
  let component: ProfilePasswordUpdateComponent;
  let fixture: ComponentFixture<ProfilePasswordUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePasswordUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePasswordUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
