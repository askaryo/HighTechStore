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
import { CleUsbComponent } from './cle-usb/cle-usb.component';
import { DisqueDurComponent } from './disque-dur/disque-dur.component';
import { StockageAccessoireComponent } from './stockage-accessoire/stockage-accessoire.component';
import {ArticleComponent} from './article/article.component';
import { GestionComponent } from './gestion/gestion.component';
import {UpdateProductComponent} from './update-product/update-product.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'PcPortable', component: PcPortableComponent },
  { path: 'PcBureau', component: PcBureauComponent},
  { path: 'PcAccessoires', component: PcAccessoireComponent },
  { path: 'Connexion', component: ConnexionComponent, canActivate: [NoAuthentificationGuard] },
  { path: 'CleUsb', component: CleUsbComponent},
  { path: 'DisqueDur', component: DisqueDurComponent },
  { path: 'StockageAccessoire', component: StockageAccessoireComponent },
  { path: 'Gestion', component: GestionComponent  },
  { path: 'StockageAccessoire', component: StockageAccessoireComponent  },
  { path: 'Article/:id', component: ArticleComponent  },
  { path: 'UpdateProduct/:id', component: UpdateProductComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
