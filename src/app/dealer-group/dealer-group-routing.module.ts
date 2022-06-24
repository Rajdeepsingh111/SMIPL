import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDealerComponent } from './add-dealer/add-dealer.component';
import { DealerGroupComponent } from './dealer-group.component';

const routes: Routes = [
  { path: '', component: DealerGroupComponent },
  { path: 'AddDealer', component: AddDealerComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealerGroupRoutingModule { }
