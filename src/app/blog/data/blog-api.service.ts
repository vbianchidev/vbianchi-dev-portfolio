import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostMeta } from '../model/post-meta.interface';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private posts: PostMeta[] = [
    {
      slug: 'hello-world',
      title: 'Hello World!',
      date: '2024-06-10',
      summary: 'Meu primeiro post no blog.',
    },
    {
      slug: 'medium-track-by',
      title: 'Desmistificando o TrackBy no Angular',
      date: '2024-11-19',
      summary: 'Nesse post, vamos desmistificar o conceito de TrackBy no Angular.',
    },
  ];

  constructor(private http: HttpClient) {}

  getPosts(): PostMeta[] {
    return this.posts;
  }

  getPostContent(slug: string): Observable<string> {
    return this.http.get(`assets/posts/${slug}.md`, { responseType: 'text' });
  }
}
