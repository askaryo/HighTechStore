import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DisqueDurComponent} from '../../disque-dur/disque-dur.component';
import {CleUsbComponent} from '../../cle-usb/cle-usb.component';
import {StockageAccessoireComponent} from '../../stockage-accessoire/stockage-accessoire.component';
import {TestComponentComponent} from '../../test-component/test-component.component';

const routes: Routes = [
  {path : 'qisque_dur', component : DisqueDurComponent},
  {path : 'cle_usb', component : CleUsbComponent},
  {path : 'stockage_accessoire', component: StockageAccessoireComponent},
  {path : 'test', component: TestComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockageRoutingModule { }
