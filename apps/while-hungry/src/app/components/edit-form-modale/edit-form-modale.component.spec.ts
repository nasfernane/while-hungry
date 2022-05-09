import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormModaleComponent } from './edit-form-modale.component';

describe('EditFormModaleComponent', () => {
  let component: EditFormModaleComponent;
  let fixture: ComponentFixture<EditFormModaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFormModaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
