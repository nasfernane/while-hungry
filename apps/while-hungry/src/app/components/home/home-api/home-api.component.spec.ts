import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeApiComponent } from './home-api.component';

describe('HomeApiComponent', () => {
  let component: HomeApiComponent;
  let fixture: ComponentFixture<HomeApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeApiComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
