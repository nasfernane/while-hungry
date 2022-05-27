import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppinglistGlobalComponent } from './shoppinglist-global.component';

describe('ShoppinglistGlobalComponent', () => {
  let component: ShoppinglistGlobalComponent;
  let fixture: ComponentFixture<ShoppinglistGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppinglistGlobalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppinglistGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
