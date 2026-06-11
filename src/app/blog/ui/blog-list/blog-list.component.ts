import { Component, inject, OnInit, signal } from '@angular/core';
import { BlogService } from '../../data/blog-api.service';
import { PostMeta } from '../../model/post-meta.interface';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [RouterLink, DatePipe],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent implements OnInit {
  private readonly blogService: BlogService = inject(BlogService);

  protected readonly posts = signal<PostMeta[]>([]);
 
  public ngOnInit(): void {
    this.posts.set(this.blogService.getPosts());
  }
}