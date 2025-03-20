import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-user-token',
  imports: [],
  templateUrl: './user-token.component.html',
  styleUrl: './user-token.component.css',
})
export class UserTokenComponent implements OnInit {
  isUserLogged: boolean = false;
  constructor(private userAuth: UserAuthService) {}

  ngOnInit(): void {
    this.isUserLogged = this.userAuth.isUserLogged;
  }

  Login() {
    this.userAuth.Login();
    this.isUserLogged = this.userAuth.isUserLogged;
  }

  Logout() {
    this.userAuth.LogOut();
    this.isUserLogged = this.userAuth.isUserLogged;
  }
}
