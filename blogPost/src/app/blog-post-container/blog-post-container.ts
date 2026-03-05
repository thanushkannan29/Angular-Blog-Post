import { Component, inject, signal } from '@angular/core';
import { APIService } from '../services/api.service';
import { BlogModel } from '../models/blogpost.model';
@Component({
  selector: 'app-blog-post-container',
  imports: [],
  templateUrl: './blog-post-container.html',
  styleUrl: './blog-post-container.css',
})
export class BlogPostContainer {

  blogposts=signal<BlogModel[]>([]);
  blogservice=inject(APIService);
  constructor(){

  }
getblogpost(){
  console.log("Hello inside blog fuction started")

  this.blogservice.apiGetPost().subscribe({
    next:(data:any)=>{
      this.blogposts.set(data?.posts || []);
      console.log(this.blogposts());
    },
    error:(err)=>{
      console.error(err.message);
    },
    complete:()=>{
      console.log("All Done working complted end")
    }
  })
}
}
