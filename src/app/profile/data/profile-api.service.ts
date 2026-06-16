import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../model/profile.inteface';

@Injectable({ providedIn: 'root' })
export class ProfileApiService {
  private readonly profileUrl = 'assets/data/profile.json';
  private readonly httpClient: HttpClient = inject(HttpClient);

  public getProfile(): Observable<Profile> {
    return this.httpClient.get<Profile>(this.profileUrl);
  }
}
