import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Injectable({ providedIn: 'root' })
export class LoginGuardService {
  constructor(private userAuth: UserAuthService, private router: Router) {}
  CanActivateFn(): boolean {
    if (!this.userAuth.isUserLogged) {
      return true;
    } else {
      this.router.navigate(['/products']);
      return false;
    }
  }
}

export const loginGuard: CanActivateFn = (route, state) => {
  return inject(LoginGuardService).CanActivateFn();
};
