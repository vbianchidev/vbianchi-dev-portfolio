import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { BlogService } from '../../data/blog-api.service';
import { PostMeta } from '../../model/post-meta.interface';

@Component({
  selector: 'app-blog',
  imports: [RouterLink, DatePipe, TranslatePipe],
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
