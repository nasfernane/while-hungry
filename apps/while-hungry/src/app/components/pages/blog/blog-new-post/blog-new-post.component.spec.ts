import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNewPostComponent } from './blog-new-post.component';

describe('BlogNewPostComponent', () => {
  let component: BlogNewPostComponent;
  let fixture: ComponentFixture<BlogNewPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogNewPostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
