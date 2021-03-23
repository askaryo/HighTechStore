import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PcPortableComponent} from './pc-portable/pc-portable.component';
import {PcBureauComponent} from './pc-bureau/pc-bureau.component';
import {PcAccessoireComponent} from './pc-accessoire/pc-accessoire.component';
import {ConnexionComponent} from './connexion/connexion.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'PcPortable', component: PcPortableComponent },
  { path: 'PcBureau', component: PcBureauComponent },
  { path: 'PcAccessoires', component: PcAccessoireComponent },
  { path: 'Connexion', component: ConnexionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
