import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService {
  constructor(private userAuth: UserAuthService, private router: Router) {}
  CanActivateFn(): boolean {
    if (this.userAuth.isUserLogged) {
      return true;
    } else {
      alert('You should login first');
      this.router.navigate(['/']);
      return false;
    }
  }
}
export const userGuard: CanActivateFn = (route, state) => {
  return inject(AuthGuardService).CanActivateFn();
};
