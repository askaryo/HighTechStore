import {EventEmitter, Injectable, NgZone, Output} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthentificationService {

  @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>();

  userData: any;

  constructor(private http: HttpClient, private route: Router) {
    let user;
    this.userData = null;
    try {
      user = JSON.parse(localStorage.getItem('user') as string);
    } catch (e) {
      user = null;
      console.log(e); // error in the above string (in this case, yes)!
    }

    if (user) {
      this.userData = user;
    }
  }

  // Log In user
  login(email: string, password: string): void
  {
    localStorage.removeItem('user');

    this.requestLogin(email, password).subscribe((data: any) => {
      console.log('ok : ' + data.id);
      if (data.id) {
        console.log('Connexion réussie...');
        localStorage.setItem('user', JSON.stringify(data));
        this.fireIsLoggedIn.emit(true); // you can pass here whatever you want

        this.success();
      } else {
        console.log('La connexion a échouée...');
        this.echec();
      }
    });
  }

  // When authentification didn't work
  echec(): void {
    // Rediriger un utilisateur
    this.route.navigate(['Connexion']);
  }

  // When user is authenticated successfully
  success(): void {
    let retrievedUser = localStorage.getItem('user');

    console.log('Alors ? ' + retrievedUser);
    if (retrievedUser && retrievedUser != null) {
      try {
        retrievedUser = JSON.parse(retrievedUser);
      } catch (e) {
        alert('FATAL ERROR : ' + e); // Au cas où si jamais...
      }
      this.userData = retrievedUser;
    }

    this.route.navigate(['Home']);
  }

  requestLogin(email: string, password: string): Observable<any> {
    return this.http.post<any>('http://1ef9ad55ea28.ngrok.io/rest_project_template/rest/utilisateurs/sign_in', {email, password});
  }

  // Returns true when user is logged in and email is verified
  get isLoggedIn(): boolean
  {
    if (this.userData) {
      return true;
    }
    return false;
  }

  // Returns true when user is Admin
  get isAdmin(): boolean
  {
    if (this.userData.type === 'admin') {
      return true;
    }
    return false;
  }

  isConnected() {
    return this.fireIsLoggedIn;

  }




  // Sign out
  SignOut(): void
  {
      localStorage.removeItem('user');
      this.userData = null;
      this.route.navigate(['Connexion']);
  }
}
