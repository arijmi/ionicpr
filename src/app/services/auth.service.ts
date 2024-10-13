import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
export interface SignInResponse {
  token: string; // The structure of the response object can be modified as per your backend response
  // You can add other fields as necessary, e.g., user info
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000'; // Replace with your backend URL

  constructor(private http: HttpClient, private router: Router) {}
  signup(username: string, password: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.post(`${this.apiUrl}/signup`, { username, password }).subscribe({
        next: () => {
          resolve(undefined); // Resolve with undefined
        },
        error: (error) => {
          console.error('Sign-up error:', error);
          reject(error); // Reject on error
        }
      });
    });
  }

  signin(username: string, password: string): Promise<SignInResponse> {
    return new Promise<SignInResponse>((resolve, reject) => {
      this.http.post<SignInResponse>(`${this.apiUrl}/signin`, { username, password }).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token); // Store token
          this.router.navigate(['/home']); // Navigate to home after sign-in
          resolve(response); // Resolve with response
        },
        error: (error) => {
          console.error('Sign-in error:', error);
          reject(error); // Reject on error
        }
      });
    });
  }
}
