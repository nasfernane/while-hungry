import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossarySectionComponent } from './glossary-section.component';

describe('GlossarySectionComponent', () => {
  let component: GlossarySectionComponent;
  let fixture: ComponentFixture<GlossarySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlossarySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlossarySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
