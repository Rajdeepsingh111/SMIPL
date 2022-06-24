import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DealerGroupRoutingModule } from './dealer-group-routing.module';
import { DealerGroupComponent } from './dealer-group.component';
import { AddDealerComponent } from './add-dealer/add-dealer.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DealerGroupComponent,
    AddDealerComponent
  ],
  imports: [
    CommonModule,
    DealerGroupRoutingModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule

  ]
})
export class DealerGroupModule { }
