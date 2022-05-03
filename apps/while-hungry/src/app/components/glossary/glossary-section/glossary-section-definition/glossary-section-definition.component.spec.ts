import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossarySectionDefinitionComponent } from './glossary-section-definition.component';

describe('GlossarySectionDefinitionComponent', () => {
  let component: GlossarySectionDefinitionComponent;
  let fixture: ComponentFixture<GlossarySectionDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlossarySectionDefinitionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlossarySectionDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
