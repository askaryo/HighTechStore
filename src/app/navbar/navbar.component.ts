import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthentificationService} from '../authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {

  isLoggedIn: boolean;
  private authentificationService: AuthentificationService;
  constructor(private aService: AuthentificationService) {
    this.authentificationService = aService;
    this.isLoggedIn = this.authentificationService.isLoggedIn;
    console.log(this.isLoggedIn);
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authentificationService.isLoggedIn;
  }
  ngOnChanges(): void {
    this.isLoggedIn = this.authentificationService.isLoggedIn;
  }

  SignOut(): void{
    this.authentificationService.SignOut();
  }

}
