import { Component, OnInit } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
import {AuthentificationService} from '../authentification.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private authentificationService: AuthentificationService) {}

  connexion(formulaire: NgForm): void
  {
    const email = formulaire.controls.email.value;
    const password = formulaire.controls.password.value;

    if (email && password) {
      this.authentificationService.login(email, password);
    }
  }

  ngOnInit(): void { }
}
