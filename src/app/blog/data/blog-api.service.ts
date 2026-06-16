import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostMeta } from '../model/post-meta.interface';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private http: HttpClient = inject(HttpClient);

  private posts: PostMeta[] = [
    {
      slug: 'medium-track-by',
      title: 'Desmistificando o TrackBy no Angular',
      date: '2024-11-19',
      summary: 'Nesse post, vamos desmistificar o conceito de TrackBy no Angular.',
    },
  ];

  getPosts(): PostMeta[] {
    return this.posts;
  }

  getPostContent(slug: string): Observable<string> {
    return this.http.get(`assets/posts/${slug}.md`, { responseType: 'text' });
  }
}
