import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage {
  username: string = ''; // Initialize the username
  password: string = ''; // Initialize the password

  constructor(private authService: AuthService, private router: Router) {}

  async signUp() {
    try {
      await this.authService.signup(this.username, this.password);
      alert('Sign-up successful!'); // Notify the user of success
      this.router.navigate(['/signin']); // Redirect to sign-in page
    } catch (error) {
      alert('Sign-up failed! Please try again.'); // Notify of failure
    }
  }
  goToSignIn() {
    this.router.navigate(['/sign-in']); // Navigate to sign-in page
  }
}
