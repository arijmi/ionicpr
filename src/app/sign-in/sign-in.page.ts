import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {
  username: string='';
  password: string='';

  constructor(private authService: AuthService, private router: Router) {}

  async signIn() {
    try {
      const response = await this.authService.signin(this.username, this.password);
      alert('Sign-in successful! Token: ' + response.token); // Now response has the correct type
    } catch (error) {
      alert('Sign-in failed! Please try again.');
    }
  }
  goToSignUp() {
    this.router.navigate(['/sign-up']); // Navigate to sign-up page
  }

}
