import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SmartphoneComponent} from '../../smartphone/smartphone.component';
import {TelephoneFixComponent} from '../../telephone-fix/telephone-fix.component';
import {TelephoneAccessoireComponent} from '../../telephone-accessoire/telephone-accessoire.component';




const routes: Routes = [
  { path: 'Smartphone', component: SmartphoneComponent },
  { path: 'TelephoneFix', component: TelephoneFixComponent },
  { path: 'TelephoneAccessoire', component: TelephoneAccessoireComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PhonesRoutingModule { }
