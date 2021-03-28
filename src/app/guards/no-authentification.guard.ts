import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthentificationService} from '../authentification.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthentificationGuard implements CanActivate {

  constructor(private route: Router, private authentificationService: AuthentificationService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authentificationService.isLoggedIn) {
      this.route.navigate(['Home']);
      return false;
    }

    return true;
  }

}
