import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';
import { PcBureauComponent } from './pc-bureau/pc-bureau.component';
import { PcAccessoireComponent } from './pc-accessoire/pc-accessoire.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PhonesModule } from './modules/phones/phones.module';
import { StockageModule } from './modules/stockage/stockage.module';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { TelephoneFixComponent } from './telephone-fix/telephone-fix.component';
import { TelephoneAccessoireComponent } from './telephone-accessoire/telephone-accessoire.component';
import { DisqueDurComponent } from './disque-dur/disque-dur.component';
import { CleUsbComponent } from './cle-usb/cle-usb.component';
import { StockageAccessoireComponent } from './stockage-accessoire/stockage-accessoire.component';
import { TestComponentComponent } from './test-component/test-component.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NoAuthentificationGuard} from './guards/no-authentification.guard';
import {AuthentificationService} from './authentification.service';
import {AuthentificationGuard} from './guards/authentification.guard';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PcPortableComponent,
    PcBureauComponent,
    PcAccessoireComponent,
    ConnexionComponent,
    SmartphoneComponent,
    TelephoneFixComponent,
    TelephoneAccessoireComponent,
    DisqueDurComponent,
    CleUsbComponent,
    StockageAccessoireComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PhonesModule,
    StockageModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthentificationService, AuthentificationGuard, NoAuthentificationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
