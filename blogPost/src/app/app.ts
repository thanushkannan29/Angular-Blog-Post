import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogPostContainer } from "./blog-post-container/blog-post-container";

@Component({
  selector: 'app-root',
  imports: [BlogPostContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('blogPost');
}
