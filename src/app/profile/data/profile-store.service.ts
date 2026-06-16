import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Profile } from '../model/profile.inteface';
import { ProfileApiService } from './profile-api.service';

export interface ProfileState {
  isLoading: boolean;
  hasError: boolean;
  profile: Profile;
}

@Injectable()
export class ProfileStoreService {
  private readonly profileApiService: ProfileApiService = inject(ProfileApiService);

  private readonly store: WritableSignal<ProfileState> = signal({
    isLoading: false,
    hasError: false,
    profile: {} as Profile,
  });

  public readonly state = this.store.asReadonly();

  public init(): void {
    this.store.update((prevState) => ({ ...prevState, isLoading: true }));

    this.profileApiService.getProfile().subscribe({
      next: (profile) => {
        this.store.update((prevState) => ({ ...prevState, profile, isLoading: false }));
      },
      error: () => {
        this.store.update((prevState) => ({ ...prevState, hasError: true, isLoading: false }));
      },
    });
  }
}
