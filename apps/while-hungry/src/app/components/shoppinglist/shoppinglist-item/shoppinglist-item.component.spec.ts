import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppinglistItemComponent } from './shoppinglist-item.component';

describe('ShoppinglistItemComponent', () => {
  let component: ShoppinglistItemComponent;
  let fixture: ComponentFixture<ShoppinglistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppinglistItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppinglistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
