import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostContainer } from './blog-post-container';

describe('BlogPostContainer', () => {
  let component: BlogPostContainer;
  let fixture: ComponentFixture<BlogPostContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPostContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogPostContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
