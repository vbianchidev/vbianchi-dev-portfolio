import { AfterViewChecked, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { marked } from 'marked';
import { BlogService } from '../../data/blog-api.service';

import * as Prism from 'prismjs';

import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
})
export class BlogPostComponent implements OnInit, AfterViewChecked {
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private readonly blogService: BlogService = inject(BlogService);

  protected readonly content = signal<string>('');
  protected readonly loading = signal<boolean>(true);
  protected readonly highlighted = signal<boolean>(true);

  public ngOnInit(): void {
    const slug = this.activatedRoute.snapshot.paramMap.get('slug')!;
    this.blogService.getPostContent(slug).subscribe((md) => {
      this.content.set(marked(md) as string);
      this.loading.set(false);

      queueMicrotask(() => {
        Prism.highlightAll();
      });
    });
  }

  public ngAfterViewChecked(): void {
    if (!this.loading() && !this.highlighted()) {
      Prism.highlightAll();
      this.highlighted.set(true);
    }
  }
}
