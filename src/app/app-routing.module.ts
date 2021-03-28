import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PcPortableComponent} from './pc-portable/pc-portable.component';
import {PcBureauComponent} from './pc-bureau/pc-bureau.component';
import {PcAccessoireComponent} from './pc-accessoire/pc-accessoire.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {NoAuthentificationGuard} from './guards/no-authentification.guard';
import {AuthentificationGuard} from './guards/authentification.guard';
import { AuthentificationService } from './authentification.service';

const routes: Routes = [
  { path: 'Home', component: HomeComponent, canActivate: [AuthentificationGuard] },
  { path: 'PcPortable', component: PcPortableComponent, canActivate: [AuthentificationGuard] },
  { path: 'PcBureau', component: PcBureauComponent, canActivate: [AuthentificationGuard] },
  { path: 'PcAccessoires', component: PcAccessoireComponent, canActivate: [AuthentificationGuard] },
  { path: 'Connexion', component: ConnexionComponent, canActivate: [NoAuthentificationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
